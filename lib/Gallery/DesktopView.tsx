import { FC, useEffect, useState } from "react";
import { GalleryItem } from "./model/GalleryItem";
import { FeatureImage } from "./FeatureImage";
import styles from "./dekstop-styles.module.css";
import { concatClasses } from "../utils";
import { ArrowRight } from "./ArrowRight";
import { GalleryProps } from "./model/GalleryProps";

export const DesktopView: FC<Required<GalleryProps>> = ({
  features,
  accentColor,
  defaultColor,
  showMoreButton,
  onClickMore,
  secondsPerFeature,
}) => {
  const [featureIdx, setFeatureIdx] = useState(0);
  const [featureTimeout, setFeatureTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);
  const [disabledAutorotation, setDisabledAutorotation] = useState(false);
  const stopAutorotation = () => {
    if (featureTimeout) {
      clearTimeout(featureTimeout);
      setFeatureTimeout(undefined);
      setDisabledAutorotation(true);
    }
  };

  const getNextFeatureIdx = (currentIdx: number, features: GalleryItem[]) => {
    const idx = currentIdx + 1;
    if (idx >= 0 && idx < features.length) {
      return idx;
    }
    return 0;
  };

  useEffect(() => {
    if (disabledAutorotation) {
      return;
    }
    const timeout = setTimeout(() => {
      setFeatureIdx(getNextFeatureIdx(featureIdx, features));
    }, secondsPerFeature * 1000);
    setFeatureTimeout(timeout);
    return () => {
      return clearTimeout(timeout);
    };
  }, [featureIdx, disabledAutorotation, features, secondsPerFeature]);

  return (
    <div className={styles.containerDesktop}>
      <div className={concatClasses(styles.columnImage, styles.paddingRight)}>
        <FeatureImage src={features[featureIdx].src} />
      </div>
      <div
        className={concatClasses(styles.columnDescription, styles.paddingLeft)}
      >
        {features.map((feature, idx) => {
          const selected = idx === featureIdx;
          return (
            <div
              key={idx}
              className={concatClasses(styles.itemDesktop, [
                styles.itemSelected,
                selected,
              ])}
              onClick={() => {
                setFeatureIdx(idx);
                stopAutorotation();
              }}
            >
              <div
                className={styles.title}
                style={{ color: selected ? accentColor : defaultColor }}
              >
                {feature.title}
              </div>
              {selected && (
                <>
                  <div className={styles.text}>{feature.description}</div>
                  <div
                    className={`${styles.loader}, ${
                      !featureTimeout ? styles.full : ""
                    }`}
                    style={{
                      backgroundColor: accentColor,
                      ...(featureTimeout
                        ? {
                            backgroundColor: accentColor,
                            animation: `progressBar ${secondsPerFeature}s`,
                            animationFillMode: "both",
                          }
                        : {}),
                    }}
                  />
                </>
              )}
            </div>
          );
        })}
        {showMoreButton && (
          <div className={styles.itemDesktop}>
            <div className={styles.title} onClick={onClickMore}>
              <ArrowRight /> More
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
