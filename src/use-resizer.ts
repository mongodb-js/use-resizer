import type { MouseEventHandler, RefObject } from "react";
import { useCallback, useEffect, useState } from "react";

const INITIAL_DIMENSIONS = {
  width: Infinity,
  height: Infinity,
};

export const useResizer = (
  ref: RefObject<HTMLDivElement>,
  options: {
    step?: number;
    axis: "horizontal" | "vertical" | "both";
    initialWidth?: number;
    initialHeight?: number;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
  }
) => {
  const { step = 1, axis = "both" } = options || {};
  const [coords, setCoords] = useState({ x: Infinity, y: Infinity });
  const [dims, setDims] = useState(INITIAL_DIMENSIONS);
  const [size, setSize] = useState(INITIAL_DIMENSIONS);
  const [isResizing, setIsResizing] = useState(false);

  const initResize: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!ref.current) return;
    event.preventDefault();

    setCoords({ x: event.clientX, y: event.clientY });
    const { width, height } = window.getComputedStyle(ref.current);
    setDims({ width: parseInt(width, 10), height: parseInt(height, 10) });
    setIsResizing(true);
  };

  const updateSize = useCallback(
    (width: number, height: number) => {
      if (!ref.current) return;

      // Set the box size.
      if (axis === "both") {
        ref.current.style.width = width + "px";
        ref.current.style.height = height + "px";
      }
      if (axis === "horizontal") ref.current.style.width = width + "px";
      if (axis === "vertical") ref.current.style.height = height + "px";
      setSize({ width, height });
    },
    [axis, ref]
  );

  const resetSize = () => {
    if (!ref.current) return;

    updateSize(
      options.initialWidth || Infinity,
      options.initialHeight || Infinity
    );
  };

  useEffect(() => {
    // Round the size based to `props.step`.
    const getValue = (input: number) => Math.ceil(input / step) * step;

    const isWidthOutOfBounds = (width: number) => {
      const maxWidth = options.maxWidth ?? Infinity;
      const minWidth = options.minWidth ?? 0;
      return width > maxWidth || width < minWidth;
    };

    const isHeightOutOfBounds = (height: number) => {
      const maxHeight = options.maxHeight ?? Infinity;
      const minHeight = options.minHeight ?? 0;
      return height > maxHeight || height < minHeight;
    };

    const doDrag = (event: MouseEvent) => {
      if (!ref.current || !isResizing) return;

      // Calculate the box size.
      const width = getValue(dims.width + event.clientX - coords.x);
      const height = getValue(dims.height + event.clientY - coords.y);

      switch (true) {
        case axis === "both" &&
          (isWidthOutOfBounds(width) || isHeightOutOfBounds(height)):
        case axis === "horizontal" && isWidthOutOfBounds(width):
        case axis === "vertical" && isHeightOutOfBounds(height):
          break;
        default:
          updateSize(width, height);
      }
    };

    const stopDrag = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", doDrag, false);
      document.removeEventListener("mouseup", stopDrag, false);
    };

    document.addEventListener("mousemove", doDrag, false);
    document.addEventListener("mouseup", stopDrag, false);

    return () => {
      document.removeEventListener("mousemove", doDrag, false);
      document.removeEventListener("mouseup", stopDrag, false);
    };
  }, [
    dims,
    coords,
    step,
    ref,
    axis,
    updateSize,
    isResizing,
    options.maxWidth,
    options.maxHeight,
    options.minWidth,
    options.minHeight,
  ]);

  return { resetSize, initResize, isResizing, size };
};
