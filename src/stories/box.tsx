import { useRef } from "react";
import type { Options } from "../";
import { useResizer } from "../";
import "./box.css";

type Props = Options;

export const Box = (props: Props) => {
  const resizeRef = useRef<HTMLDivElement>(null);

  const { initResize, isResizing, resetSize, size } = useResizer(
    resizeRef,
    props
  );

  const displaySize =
    isResizing && size.height !== Infinity && size.width !== Infinity;

  const hasReset = props.initialHeight || props.initialWidth;

  const northWest = (
    <>
      {props.direction === "west" && (
        <div className="resize-bar-west cursor-ew" onMouseDown={initResize} />
      )}
      {props.direction === "north" && (
        <div className="resize-bar-north cursor-ns" onMouseDown={initResize} />
      )}
    </>
  );

  const southEast = (
    <>
      {(props.direction === "east" || props.direction === "south-east") && (
        <div
          className={`resize-bar-east ${
            props.direction === "south-east" ? "cursor-nswse" : "cursor-ew"
          }`}
          onMouseDown={initResize}
        />
      )}
      {(props.direction === "south" || props.direction === "south-east") && (
        <div
          className={`resize-bar-south ${
            props.direction === "south-east" ? "cursor-nswse" : "cursor-ns"
          }`}
          onMouseDown={initResize}
        />
      )}
      <div className="corner" />
    </>
  );

  const isNorthWest = props.direction === "west" || props.direction === "north";

  const fixedBoxClass = isNorthWest ? "fixed-box right-to-left" : "fixed-box";
  const boxClass = isNorthWest ? "box left-to-right" : "box";

  const box = (
    <>
      <div ref={resizeRef} className={boxClass}>
        {northWest}
        <div className="size-info">
          {displaySize && `${size.height}px x ${size.width}px`}
        </div>
        {southEast}
      </div>
    </>
  );

  return (
    <div className="container">
      <>
        <div className={fixedBoxClass}>{box}</div>
        {hasReset && (
          <button className="reset-button" onClick={resetSize}>
            Reset Box
          </button>
        )}
      </>
    </div>
  );
};
