import type { MouseEventHandler } from "react";
import { useEffect } from "react";
import type { Options, Ref } from "./types";
import { useResizerStates } from "./utils";

export const useResizer = (ref: Ref, options: Options) => {
  const {
    setCoords,
    setInitialSize,
    size,
    setSize,
    isResizing,
    setIsResizing,
    getDimensions,
    updateSizeWhenWithinBounds,
  } = useResizerStates(ref, options);

  const initResize: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!ref.current) return;
    event.preventDefault();

    setCoords({ x: event.clientX, y: event.clientY });
    const { width, height } = window.getComputedStyle(ref.current);
    setInitialSize({
      width: parseInt(width, 10),
      height: parseInt(height, 10),
    });
    setIsResizing(true);
  };

  const resetSize = () => setSize(options.initialWidth, options.initialHeight);

  useEffect(() => {
    const doDrag = (event: MouseEvent) => {
      if (!ref.current || !isResizing) return;

      const { width, height } = getDimensions(event);
      updateSizeWhenWithinBounds(width, height);
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
    getDimensions,
    isResizing,
    ref,
    setIsResizing,
    updateSizeWhenWithinBounds,
  ]);

  return { resetSize, initResize, isResizing, size };
};
