import { FC } from "react";
import { Gallery } from "../lib/Gallery";
import { GalleryProps } from "../lib/Gallery/model/GalleryProps";

const features: GalleryProps["features"] = [
  {
    title: "Feature 1",
    description: "Lorem Ipsum description of a feature",
    src: "",
  },
  {
    title: "Feature 2",
    description: "Lorem Ipsum description of a feature",
    src: "",
  },
];

const App: FC = () => {
  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Gallery features={features} />
    </div>
  );
};

export default App;
