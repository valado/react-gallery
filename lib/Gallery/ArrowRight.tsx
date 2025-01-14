import { FC } from "react";

export const ArrowRight: FC<{ color: string }> = ({ color }) => (
  <svg
    style={{
      width: "20px",
      verticalAlign: "top",
      margin: "auto 0.5em",
    }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    fill={color}
  >
    <path d="M313.9 216H12c-6.6 0-12 5.4-12 12v56c0 6.6 5.4 12 12 12h301.9v46.1c0 21.4 25.9 32.1 41 17l86.1-86.1c9.4-9.4 9.4-24.6 0-33.9l-86.1-86.1c-15.1-15.1-41-4.4-41 17V216z" />
  </svg>
);
