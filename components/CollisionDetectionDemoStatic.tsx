import Rectangle from './Rectangle';

function CollisionDetectionDemoStatic() {
  const unitSize = 60;
  const gridSize = 4;
  const gridWidth = gridSize * unitSize; // 240px
  const gridHeight = gridSize * unitSize; // 240px
  const dotRadius = 6;
  const padding = dotRadius; // Padding to prevent dots from being clipped

  // Yellow dot position (amber rectangle is at left-[37px] top-[53px])
  const yellowRect = {
    top: 53,
    left: 37,
    width: 120,
    height: 180,
  };

  const yellowDotX = yellowRect.left;
  const yellowDotY = yellowRect.top;

  return (
    <div className="relative">
      <Rectangle width={4} height={4} unitSize={unitSize} />
      <svg
        width={gridWidth}
        height={gridHeight}
        viewBox={`-${padding} -${padding} ${gridWidth + padding * 2} ${
          gridHeight + padding * 2
        }`}
        className="absolute top-0 left-0 overflow-visible"
      >
        {/* Amber rectangle */}
        <rect
          x={37}
          y={53}
          width={120}
          height={180}
          fill="#fbbf24"
          fillOpacity={0.4}
          stroke="#000"
          strokeWidth={2}
        />
        {/* Yellow dot */}
        <circle
          cx={yellowDotX}
          cy={yellowDotY}
          r={6}
          fill="#f59e0b"
          stroke="#000"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
}

export default CollisionDetectionDemoStatic;
