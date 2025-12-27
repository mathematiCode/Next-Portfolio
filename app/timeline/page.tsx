'use client';
import Dot from '../../components/Dot';
import timeline from '../../data/timeline.json';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
//import { range } from 'lodash';

function TimelinePage() {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [thickness, setThickness] = useState('0.2');
  const [radius, setRadius] = useState('0.3');
  const [points, setPoints] = useState<Array<{ x: number; y: number }>>([]);

  useEffect(() => {
    const updateTimeline = () => {
      // Tailwind's sm breakpoint is 640px, so mobile is < 640px
      setRadius(window.innerWidth < 640 ? '0.6' : '0.3');
      setThickness(window.innerWidth < 640 ? '0.4' : '0.2');
    };

    updateTimeline();
    window.addEventListener('resize', updateTimeline);
    return () => window.removeEventListener('resize', updateTimeline);
  }, []);

  useLayoutEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const totalLength = path.getTotalLength();
    const calculatedPoints: Array<{ x: number; y: number }> = [];

    timeline.forEach(snapshot => {
      const tempPoint = path.getPointAtLength(totalLength * snapshot.percent);
      calculatedPoints.push({
        x: parseFloat(tempPoint.x.toFixed(2)),
        y: parseFloat(tempPoint.y.toFixed(2)),
      });
    });

    setPoints(calculatedPoints);
  }, []);

  return (
    <>
      <h1>Timeline</h1>
      <div className="relative">
        <svg
          className="justify-self-start pb-16"
          viewBox="-3 0 27 40"
          preserveAspectRatio="none"
          style={{ minWidth: '70%', maxWidth: '80%', minHeight: '100vh' }}
        >
          <path
            ref={pathRef}
            d="
            M 11,2
            A 3 1 0 0 0 8 6
            A 3 1 0 0 1 8 10
            A 4 1 0 0 0 8 15
            A 3 1 0 0 1 8 21
            A 3 1 0 0 0 8 25
            A 5 1 0 0 1 8 30
            A 5 1 0 0 0 10 34
            A 3 1 0 0 1 8 40
          "
            fill="none"
            stroke="#4b4b4f"
            strokeWidth={thickness}
          />
          {timeline.map((snapshot, index) => {
            const point = points[index];
            if (!point) return null;

            return (
              <g key={snapshot.startDate}>
                <Dot
                  radius={radius}
                  snapshot={snapshot}
                  pathRef={pathRef}
                  percent={snapshot.percent}
                  calculatedPoint={point}
                />
                <text
                  x={point.x + snapshot.textPosition.x}
                  y={point.y + snapshot.textPosition.y}
                  fill="currentColor"
                  fontSize="0.5"
                  textAnchor="start"
                >
                  {snapshot.summary}
                </text>
              </g>
            );
          })}
        </svg>
        <div className="absolute top-0 h-full right-0 w-60 border-gray-600 border-l-4 flex flex-col pt-16 justify-between pb-16">
          <span>Jan 2024</span>
          <span>Feb 2024</span>
          <span>March 2024</span>
          <span>April 2024</span>
          <span>May 2024</span>
          <span>June 2024</span>
          <span>July 2024</span>
          <span>Aug 2024</span>
          <span>Sept 2024</span>
          <span>Oct 2024</span>
          <span>Nov 2024</span>
          <span>Dec 2024</span>
          <span>Jan 2025</span>
          <span>Feb 2025</span>
          <span>March 2025</span>
          <span>April 2025</span>
          <span>May 2025</span>
          <span>June 2025</span>
          <span>July 2025</span>
          <span>Aug 2025</span>
          <span>Sept 2025</span>
          <span>Oct 2025</span>
          <span>Nov 2025</span>
          <span>Dec 2025</span>
        </div>
      </div>
    </>
  );
}

export default TimelinePage;
