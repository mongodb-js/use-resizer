import { useRef } from "react";
import type { Options } from "../";
import { useResizer } from "../";
import "./box.css";

type Direction =
  | "west"
  | "east"
  | "east-west"
  | "north"
  | "south"
  | "north-south"
  | "south-east";
type Props = Options & {
  direction: Direction;
};

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
        <div className="resize-bar-west" onMouseDown={initResize} />
      )}
      {props.direction === "north" && (
        <div className="resize-bar-north" onMouseDown={initResize} />
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

  const box = (
    <>
      <div ref={resizeRef} className="box">
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
        <div className="fix-left-edge">{box}</div>
        {hasReset && (
          <button className="reset-button" onClick={resetSize}>
            Reset Box
          </button>
        )}
      </>
    </div>
  );
};
