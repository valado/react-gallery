import { FC } from "react";

interface FeatureImageProps {
  src: string;
  alt?: string;
}

export const FeatureImage: FC<FeatureImageProps> = ({
  src,
  alt = "feature image",
}) => {
  return (
    <div
      style={{
        maxWidth: "100%",
        boxShadow: "0 1px 0 #aeb5bb, 0 10px 20px -5px rgba(0,0,0,0.5)",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <img src={src} alt={alt} style={{ maxWidth: "100%" }} />
    </div>
  );
};
