export interface GalleryItem {
  title: string;
  description: string;
  src: string;
  alt?: string;
  onClick?: () => void;
}
