import type { FC } from "react";

interface DiagonalPatternProps {
  className?: string;
}

export const DiagonalPattern: FC<DiagonalPatternProps> = ({
  className = "",
}) => (
  <svg
    className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="diag"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line
          x1="0"
          y1="0"
          x2="0"
          y2="40"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.07"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#diag)" />
  </svg>
);
