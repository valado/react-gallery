import { FC } from "react";
import { Gallery } from "../lib/Gallery";
import { GalleryProps } from "../lib/Gallery/model/GalleryProps";

const features: GalleryProps["features"] = [
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "/palm-trees.jpg",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "/winter.jpg",
  },
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "/palm-trees.jpg",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "/winter.jpg",
  },
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "/palm-trees.jpg",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "/winter.jpg",
  },
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "/palm-trees.jpg",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "/winter.jpg",
  },
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "/palm-trees.jpg",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "/winter.jpg",
  },
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "/palm-trees.jpg",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "/winter.jpg",
  },
];

const App: FC = () => {
  return (
    <div
      style={{
        width: "85%",
        height: "350px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Gallery features={features} showMoreButton />
    </div>
  );
};

export default App;
