import type { RefObject } from "react";

export type Ref = RefObject<HTMLDivElement>;

export type Options = {
  step?: number;
  axis: "horizontal" | "vertical" | "both";
  initialWidth?: number;
  initialHeight?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
};

export type Dimensions = {
  width: number;
  height: number;
};

export type Coordinates = { x: number; y: number };
