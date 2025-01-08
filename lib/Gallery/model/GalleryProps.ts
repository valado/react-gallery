import { GalleryItem } from "./GalleryItem";

export interface GalleryProps {
  features: GalleryItem[];
  defaultColor?: string;
  accentColor?: string;
  secondsPerFeature?: number;
  showMoreButton?: boolean;
  onClickMore?: () => void;
}

export const DEFAULT_PROPS = {
  defaultColor: "grey",
  accentColor: "purple",
  secondsPerFeature: 15,
  showMoreButton: false,
  onClickMore: () => {},
};
