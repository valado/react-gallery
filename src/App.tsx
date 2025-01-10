import { FC } from "react";
import { Gallery } from "../lib/Gallery";

const images = ["/trees-1.jpg", "/trees-2.jpg"];
const getFeatureObj = (idx: number) => ({
  title: `Feature ${idx + 1}`,
  description:
    "Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
  src: images[idx % images.length],
});
const features = Array.from({ length: 5 }, (_, idx) => getFeatureObj(idx));

const App: FC = () => {
  return (
    <div
      style={{
        width: "85%",
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
