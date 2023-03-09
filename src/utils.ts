import { useCallback, useState } from "react";
import type { Coordinates, Dimensions, Options, Ref } from "./types";

const DEFAULT_DIMENSIONS: Dimensions = {
  width: Infinity,
  height: Infinity,
};

export const useResizerStates = (ref: Ref, options: Options) => {
  const { axis = "both" } = options;

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

      if (axis === "horizontal") {
        ref.current.style.width = width + "px";
        _setSize({ height: initialSize.height, width });
      } else if (axis === "vertical") {
        ref.current.style.height = height + "px";
        _setSize({ width: initialSize.width, height });
      } else {
        ref.current.style.width = width + "px";
        ref.current.style.height = height + "px";
        _setSize({ width, height });
      }
    },
    [axis, initialSize.height, initialSize.width, ref]
  );

  const getDimensions = (event: MouseEvent) => ({
    width: getSize(initialSize.width + event.clientX - coords.x, options),
    height: getSize(initialSize.height + event.clientY - coords.y, options),
  });

  const updateSizeWhenWithinBounds = useCallback(
    (width: number, height: number) => {
      const widthOOB = isWidthOutOfBounds(width, options);
      const heightOOB = isHeightOutOfBounds(height, options);

      switch (true) {
        case axis === "both" && (widthOOB || heightOOB):
        case axis === "horizontal" && widthOOB:
        case axis === "vertical" && heightOOB:
          break;
        default:
          setSize(width, height);
      }
    },
    [axis, options, setSize]
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
