import { CSSProperties, FC, useMemo } from "react";
import { DEFAULT_PROPS, GalleryProps } from "./model/GalleryProps";
import { DesktopView } from "./DesktopView";
import { MobileView } from "./MobileView";
import { useIsMobile } from "react-basic-utils";

export const Gallery: FC<GalleryProps> = (props) => {
  const isMobileView = useIsMobile();
  const mergedProps = useMemo(
    () => ({
      ...DEFAULT_PROPS,
      ...props,
    }),
    [props]
  );
  return (
    <div
      style={
        {
          "--color-accent": mergedProps.accentColor,
          "--color-default": mergedProps.defaultColor,
        } as CSSProperties
      }
    >
      {isMobileView ? (
        <MobileView {...mergedProps} />
      ) : (
        <DesktopView {...mergedProps} />
      )}
    </div>
  );
};
