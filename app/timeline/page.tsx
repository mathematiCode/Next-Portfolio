'use client';
import Dot from '../../components/Dot';
import timeline from '../../data/timeline.json';
import { useState, useEffect, useRef } from 'react';
//import { range } from 'lodash';

function TimelinePage() {
  const pathRef = useRef(null);
  const [thickness, setThickness] = useState('0.2');
  const [radius, setRadius] = useState('0.3');

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
  // useEffect(() => {
  //   const path = pathRef.current;
  //   const totalLength = path.getTotalLength();

  //   const points = [];
  //   for (let i = 1; i <= 15; i++) {
  //     let point = path.getPointAtLength(totalLength * (i / 15));
  //     point = { x: point.x.toFixed(2), y: point.y.toFixed(2) };
  //     points.push(point);
  //   }
  //   console.log(points);
  // });

  return (
    <>
      <h1>Timeline</h1>
      <div className="relative">
        <svg
          className="justify-self-start"
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
          {timeline.map(snapshot => {
            return (
              <g key={snapshot.startDate}>
                <Dot radius={radius} snapshot={snapshot} />
                <text
                  x={snapshot.point.x + snapshot.textPosition.x}
                  y={snapshot.point.y + snapshot.textPosition.y}
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
        <div className="absolute top-0 h-full right-0 w-60 border-gray-600 border-l-4 flex flex-col pt-16 justify-between">
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
