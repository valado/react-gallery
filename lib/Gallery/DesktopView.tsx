import { FC, useEffect, useState } from "react";
import { concatClassNames } from "react-basic-utils";
import { GalleryItem } from "./model/GalleryItem";
import { FeatureImage } from "./FeatureImage";
import styles from "./dekstop-styles.module.css";
import { ArrowRight } from "./ArrowRight";
import { GalleryProps } from "./model/GalleryProps";

export const DesktopView: FC<Required<GalleryProps>> = ({
  features,
  accentColor,
  showMoreButton,
  moreButtonHref,
  secondsPerFeature,
  moreButtonLabel,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [itemTimeout, setItemTimeout] = useState<NodeJS.Timeout | undefined>(
    undefined
  );
  const [disabledAutorotation, setDisabledAutorotation] = useState(false);
  const stopAutorotation = () => {
    if (itemTimeout) {
      clearTimeout(itemTimeout);
      setItemTimeout(undefined);
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
      setCurrentIdx(getNextFeatureIdx(currentIdx, features));
    }, secondsPerFeature * 1000);
    setItemTimeout(timeout);
    return () => {
      return clearTimeout(timeout);
    };
  }, [currentIdx, disabledAutorotation, features, secondsPerFeature]);

  return (
    <div className={styles.containerDesktop}>
      <div className={styles.columnImage}>
        <FeatureImage
          src={features[currentIdx].src}
          alt={features[currentIdx].alt}
          href={features[currentIdx].href}
        />
      </div>
      <div className={styles.columnDescription}>
        {features.map((feature, idx) => {
          const selected = idx === currentIdx;
          return (
            <div
              key={idx}
              className={concatClassNames(styles.itemDesktop, [
                styles.itemSelected,
                selected,
              ])}
              onClick={() => {
                setCurrentIdx(idx);
                stopAutorotation();
              }}
            >
              <div
                className={concatClassNames(styles.title, [
                  styles.titleSelected,
                  selected,
                ])}
              >
                {feature.title}
              </div>
              {selected && (
                <>
                  <div className={styles.text}>{feature.description}</div>
                  <div
                    className={styles.loader}
                    style={
                      itemTimeout
                        ? {
                            animationDuration: `${secondsPerFeature}s`,
                          }
                        : { width: "100%" }
                    }
                  />
                </>
              )}
            </div>
          );
        })}
        {showMoreButton && (
          <div className={styles.itemDesktop}>
            <a href={moreButtonHref}>
              <div className={styles.title}>
                {moreButtonLabel} <ArrowRight color={accentColor} />
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
