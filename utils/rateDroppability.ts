interface Rect {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function rateDroppability(x: number, y: number, droppableRect: Rect) {
  const { top, left, width, height } = droppableRect;
  // I'm multiplying the width and height by 2 to allow a greater range of droppableRects
  // to be considered by decreasing the likelihood of a negative xOffsetRatio or yOffsetRatio
  const xOffsetRatio = (width * 2 - Math.abs(x - left)) / (width * 2);
  const yOffsetRatio = (height * 2 - Math.abs(y - top)) / (height * 2);
  if (xOffsetRatio < 0 && yOffsetRatio < 0) return 0;
  return (xOffsetRatio * yOffsetRatio).toFixed(3);
}

export function rateDroppabilityBad(x: number, y: number, droppableRect: Rect) {
  const { top, left, width, height } = droppableRect;
  // I'm multiplying the width and height by 2 to allow a greater range of droppableRects
  // to be considered by decreasing the likelihood of a negative xOffsetRatio or yOffsetRatio
  const xOffsetRatio = (width - Math.abs(x - left)) / width;
  const yOffsetRatio = (height - Math.abs(y - top)) / height;
  if (xOffsetRatio < 0 && yOffsetRatio < 0) return 0;
  return (xOffsetRatio * yOffsetRatio).toFixed(3);
}
