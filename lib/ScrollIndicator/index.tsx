import { FC } from "react";
import { useScroll } from "../utils";

type ScrollIndicatorProps = {
  startColor: string;
  endColor: string;
  position?: "top" | "bottom";
  height?: number;
};

export const ScrollIndicator: FC<ScrollIndicatorProps> = ({
  startColor,
  endColor,
  position = "top",
  height = 7,
}) => {
  const scrollPosition = useScroll(window);
  const scrollProgress =
    (scrollPosition / (document.body.scrollHeight - window.screen.height)) *
    100;

  return (
    <div
      className={position === "top" ? "top" : "bottom"}
      style={{
        zIndex: 9999,
        position: "fixed",
        left: "0px",
        height: `${height}px`,
        maxWidth: "100%",
        backgroundImage: `linear-gradient(to bottom right, ${startColor}, ${endColor})`,
        width: `${scrollProgress}%`,
      }}
    />
  );
};
