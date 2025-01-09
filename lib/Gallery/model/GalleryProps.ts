import { GalleryItem } from "./GalleryItem";

export type GalleryProps = {
  features: GalleryItem[];
  defaultColor?: string;
  accentColor?: string;
  secondsPerFeature?: number;
  showMoreButton?: boolean;
  moreButtonHref?: string;
};

export const DEFAULT_PROPS = {
  defaultColor: "#27333e",
  accentColor: "#6a52fc",
  secondsPerFeature: 15,
  showMoreButton: false,
  moreButtonHref: "",
};
