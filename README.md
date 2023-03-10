# useResizer

`useResizer` is a minimal react hook implementation to produce the resize behaviour the `resize` CSS property provides but with more control over interactions through custom HTML and CSS code.

Inspiration was drawn from several [existing libraries](https://github.com/bokuweb/react-rnd) and [blog posts](https://clubmate.fi/resize-any-element) to build this hook.

## Basic Usage

Here is a basic example of using the hook with the `east` direction of resizing. The hook takes a HTMLDivElement as a ref and some options as input. The ref object is manipulated to resize an element. Details on the options is provided in the next section.

```
const resizeRef = useRef<HTMLDivElement>(null);
  const { initResize, isResizing, resetSize } = useResizer(resizeRef, {
    direction: 'east'
  });

  ...
return (
  <div ref={resizeRef} className="resize-pane">
    <div
      className="resize-bar"
      onMouseDown={initResize}
    />
  </div>
);
```

## Options

### direction

```
"west" | "east" | "north" | "south" | "south-east"
```

The direction to resize towards.

### step

```
number
```

Optional property to control the step to recalcuate the width and height of the resized element.

### initialWidth

```
number (pixels)
```

Optional property to set the initial width of the resized element.

### initialHeight

```
number (pixels)
```

Optional property to set the initial height of the resized element.

### minWidth

```
number (pixels)
```

Optional property to set the minimum width of the resized element. The element will not be able to be resized below this width.

### minHeight

```
number (pixels)
```

Optional property to set the minimum height of the resized element. The element will not be able to be resized below this height.

### maxWidth

```
number (pixels)
```

Optional property to set the maximum width of the resized element. The element will not be able to be resized above this width.

### maxHeight

```
number (pixels)
```

Optional property to set the maximum height of the resized element. The element will not be able to be resized above this height.

## Examples

Storybook examples are in the `src/stories` folder and can be run by `npm run storybook`.
