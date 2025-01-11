import { GalleryItem } from "./GalleryItem";

export type GalleryProps = {
  features: GalleryItem[];
  defaultColor?: string;
  accentColor?: string;
  secondsPerFeature?: number;
  showMoreButton?: boolean;
  moreButtonHref?: string;
  moreButtonLabel?: string;
  swipeLabel?: string;
};

export const DEFAULT_PROPS = {
  defaultColor: "#27333e",
  accentColor: "#6a52fc",
  secondsPerFeature: 15,
  showMoreButton: false,
  moreButtonHref: "",
  moreButtonLabel: "More",
  swipeLabel: "swipe for more >>",
};
