import { FC } from "react";
import { concatClasses } from "../utils";

interface FeatureImageProps {
  src: string;
  alt?: string;
}

export const FeatureImage: FC<FeatureImageProps> = ({
  src,
  alt = "Feature image",
}) => {
  return (
    <div
      style={{
        margin: "auto",
        height: "fit-content",
        boxShadow: "0 1px 0 #aeb5bb, 0 10px 20px -5px rgba(0,0,0,0.5)",
      }}
    >
      <div className={concatClasses("screen shadow-box")}>
        <picture>
          <source src={src} type="image/webp" />
          <source src={src} type="image/png" />
          <img src={src} alt={alt} />
        </picture>
      </div>
    </div>
  );
};
