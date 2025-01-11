import { FC, PropsWithChildren } from "react";

interface FeatureImageProps {
  src: string;
  alt?: string;
  href?: string;
}

export const FeatureImage: FC<FeatureImageProps> = ({
  src,
  alt = "feature image",
  href,
}) => (
  <OptionalLink href={href}>
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "100%",
        boxShadow: "0 1px 0 #aeb5bb, 0 10px 20px -5px rgba(0,0,0,0.5)",
        borderRadius: "5px",
      }}
    />
  </OptionalLink>
);

const OptionalLink: FC<PropsWithChildren<{ href?: string }>> = ({
  href,
  children,
}) =>
  href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : (
    <>{children}</>
  );
