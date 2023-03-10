import { useCallback, useState } from "react";
import type { Coordinates, Dimensions, Options, Ref } from "./types";

const DEFAULT_DIMENSIONS: Dimensions = {
  width: Infinity,
  height: Infinity,
};

export const useResizerStates = (ref: Ref, options: Options) => {
  const { direction = "east" } = options;

  const [coords, setCoords] = useState<Coordinates>({
    x: Infinity,
    y: Infinity,
  });
  const [initialSize, setInitialSize] =
    useState<Dimensions>(DEFAULT_DIMENSIONS);
  const [size, _setSize] = useState<Dimensions>(DEFAULT_DIMENSIONS);
  const [isResizing, setIsResizing] = useState(false);

  const setSize = useCallback(
    (width = Infinity, height = Infinity) => {
      if (!ref.current) return;

      if (direction === "east" || direction === "west") {
        ref.current.style.width = width + "px";
        _setSize({ height: initialSize.height, width });
      } else if (direction === "north" || direction === "south") {
        ref.current.style.height = height + "px";
        _setSize({ width: initialSize.width, height });
      } else {
        ref.current.style.width = width + "px";
        ref.current.style.height = height + "px";
        _setSize({ width, height });
      }
    },
    [direction, initialSize.height, initialSize.width, ref]
  );

  const getDimensions = (event: MouseEvent) => ({
    width: getSize(
      initialSize.width +
        (direction === "west"
          ? coords.x - event.clientX
          : event.clientX - coords.x),
      options
    ),
    height: getSize(
      initialSize.height +
        (direction === "north"
          ? coords.y - event.clientY
          : event.clientY - coords.y),
      options
    ),
  });

  const updateSizeWhenWithinBounds = useCallback(
    (width: number, height: number) => {
      const widthOOB = isWidthOutOfBounds(width, options);
      const heightOOB = isHeightOutOfBounds(height, options);

      const horizontalAxis =
        direction === "east" ||
        direction === "west" ||
        direction === "south-east";
      const verticalAxis =
        direction === "north" ||
        direction === "south" ||
        direction === "south-east";

      switch (true) {
        case (horizontalAxis || verticalAxis) && (widthOOB || heightOOB):
        case horizontalAxis && widthOOB:
        case verticalAxis && heightOOB:
          break;
        default:
          setSize(width, height);
      }
    },
    [direction, options, setSize]
  );

  return {
    coords,
    setCoords,
    initialSize,
    setInitialSize,
    size,
    setSize,
    isResizing,
    setIsResizing,
    getDimensions,
    updateSizeWhenWithinBounds,
  };
};

const isWidthOutOfBounds = (
  width: number,
  { maxWidth = Infinity, minWidth = 0 }: Options
) => width > maxWidth || width < minWidth;

const isHeightOutOfBounds = (
  height: number,
  { maxHeight = Infinity, minHeight = 0 }: Options
) => height > maxHeight || height < minHeight;

const getSize = (input: number, { step = 1 }: Options) =>
  Math.ceil(input / step) * step;
