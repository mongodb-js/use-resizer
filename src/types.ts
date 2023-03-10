import type { RefObject } from "react";

export type Ref = RefObject<HTMLDivElement>;
type Direction = "west" | "east" | "north" | "south" | "south-east";

export type Options = {
  step?: number;
  direction: Direction;
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
