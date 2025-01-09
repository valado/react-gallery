import { FC, useEffect, useRef, useState } from "react";

import { concatClasses, SCROLL_DIRECTION, useScroll } from "../utils";
import { ArrowRight } from "./ArrowRight";
import { FeatureImage } from "./FeatureImage";
import styles from "./mobile-styles.module.css";
import { GalleryProps } from "./model/GalleryProps";
import { idxAllowed } from "../utils";

export const MobileView: FC<Required<GalleryProps>> = ({
  features,
  accentColor,
  showMoreButton,
  moreButtonHref,
}) => {
  const [featureIdx, setFeatureIdx] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [refListCurrentNode, setRefListCurrentNode] = useState<any>(undefined);

  const listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (listRef.current !== refListCurrentNode) {
      setRefListCurrentNode(listRef.current);
    }
  }, [listRef, refListCurrentNode]);
  const scrollProgress = useScroll(refListCurrentNode, SCROLL_DIRECTION.X);
  if (listRef.current && scrollProgress) {
    const scrollWidth =
      listRef.current.scrollWidth - listRef.current.clientWidth;
    const scrollPerItem = scrollWidth / features.length;
    const idx = Math.floor(scrollProgress / scrollPerItem);
    if (idx !== featureIdx && idxAllowed(idx, features)) {
      setFeatureIdx(idx);
    }
  }

  return (
    <div className={styles.containerMobile}>
      <div ref={listRef} className={styles.sidepanelMobile}>
        {features.map((feature, idx) => {
          const selected = idx === featureIdx;
          return (
            <div
              key={idx}
              className={concatClasses(styles.itemMobile, [
                styles.itemSelected,
                selected,
              ])}
            >
              <div
                className={concatClasses(styles.title, [
                  styles.titleSelected,
                  selected,
                ])}
              >
                {feature.title}
              </div>
              <div
                style={{
                  userSelect: "none",
                  margin: "25px",
                  marginTop: "5px",
                  textAlign: "justify",
                  fontSize: "80%",
                }}
              >
                {feature.description}
              </div>
              {selected && (
                <div
                  style={{
                    width: "100%",

                    backgroundColor: accentColor,
                    height: "3px",
                    position: "absolute",
                    bottom: "0",
                    left: "0",
                  }}
                />
              )}
              {0 === idx && (
                <div className={styles.scrollHint}>
                  <span>{"swipe for more >>"}</span>
                </div>
              )}
            </div>
          );
        })}
        {showMoreButton && (
          <div className={styles.itemMobile}>
            <a href={moreButtonHref}>
              <div className={styles.title}>
                More <ArrowRight color={accentColor} />
              </div>
            </a>
          </div>
        )}
      </div>
      <div className={styles.pictureMobile}>
        <FeatureImage src={features[featureIdx].src} />
      </div>
    </div>
  );
};
