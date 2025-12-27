'use client';
import { useState } from 'react';
import Rectangle from './Rectangle';
import {
  rateDroppability,
  rateDroppabilityBad,
} from '@/utils/rateDroppability';

function CollisionDetectionDemo({}) {
  const unitSize = 60;
  const gridSize = 4;
  const gridWidth = gridSize * unitSize; // 240px
  const gridHeight = gridSize * unitSize; // 240px
  const dotRadius = 6;
  const padding = dotRadius; // Padding to prevent dots from being clipped

  // Start at top-left intersection (0, 0)
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  // Yellow dot position (amber rectangle is at left-[37px] top-[53px])

  const yellowRect = {
    top: 53,
    left: 37,
    width: 120,
    height: 180,
  };

  const yellowDotX = yellowRect.left;
  const yellowDotY = yellowRect.top;

  // Red dot position (at intersection coordinates)
  const redDotX = dotPosition.x * 1.03;
  const redDotY = dotPosition.y * 1.03;

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;

    // Convert screen coordinates to SVG viewBox coordinates
    const svgPoint = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    const clickX = svgPoint.x;
    const clickY = svgPoint.y;

    // Find nearest intersection
    // Intersections are at multiples of unitSize (0, 60, 120, 180, 240)
    const nearestX = Math.round(clickX / unitSize) * unitSize;
    const nearestY = Math.round(clickY / unitSize) * unitSize;

    // Clamp to grid bounds (0 to gridSize * unitSize)
    const clampedX = Math.max(0, Math.min(nearestX, gridSize * unitSize));
    const clampedY = Math.max(0, Math.min(nearestY, gridSize * unitSize));

    setDotPosition({ x: clampedX, y: clampedY });
  };

  return (
    <div className="flex">
      <div className="relative">
        <Rectangle width={4} height={4} unitSize={unitSize} />
        <svg
          width={gridWidth}
          height={gridHeight}
          viewBox={`-${padding} -${padding} ${gridWidth + padding * 2} ${
            gridHeight + padding * 2
          }`}
          className="absolute top-0 left-0 cursor-pointer overflow-visible"
          onClick={handleClick}
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
          {/* Red line connecting yellow dot to red dot */}
          {redDotX !== yellowDotX || redDotY !== yellowDotY ? (
            <line
              x1={yellowDotX}
              y1={yellowDotY}
              x2={redDotX}
              y2={redDotY}
              stroke="#ef4444"
              strokeWidth={4}
            />
          ) : null}
          {/* Yellow dot */}
          <circle
            cx={yellowDotX}
            cy={yellowDotY}
            r={6}
            fill="#f59e0b"
            stroke="#000"
            strokeWidth={1}
          />
          {/* Red dot that moves to clicked intersections */}
          <circle
            cx={redDotX}
            cy={redDotY}
            r={6}
            fill="#ef4444"
            stroke="#000"
            strokeWidth={1}
          />
        </svg>
      </div>
      <div className="flex flex-col mx-4">
        {/* <span>
          x offset ratio: (width * 2 - Math.abs(x - left)) / (width * 2);
        </span>
        <span>
          x offset ratio: (width * 2 - Math.abs({redDotX} - {yellowDotX})) /
          (width * 2);
        </span>
        <span>
          {' '}
          x offset ratio: (width * 2 - Math.abs(
          {(redDotX - yellowDotX).toFixed(2)})) / (width * 2);
        </span>

        <span>
          y offset ratio: (height * 2 - Math.abs(y - top)) / (height * 2);
        </span>
        <span>
          y offset ratio: (height * 2 - Math.abs({redDotY} - {yellowDotY})) /
          (height * 2);
        </span>
        <span>
          {' '}
          y offset ratio: (height * 2 - Math.abs(
          {(redDotY - yellowDotY).toFixed(2)})) / (height * 2)
        </span> */}
        <span className="text-lg">
          Droppability Rating: {rateDroppability(redDotX, redDotY, yellowRect)}
        </span>
        <span className="text-lg">
          Droppability Rating without Multiplying by 2:{' '}
          {rateDroppabilityBad(redDotX, redDotY, yellowRect)}
        </span>
      </div>
    </div>
  );
}

export default CollisionDetectionDemo;
