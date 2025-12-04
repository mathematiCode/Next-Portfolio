'use client';
import Dot from '../../components/Dot';
import timeline from '../../data/timeline.json';
import { useRef } from 'react';
//import { range } from 'lodash';

function TimelinePage() {
  const pathRef = useRef(null);

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
      <svg
        viewBox="-3 0 27 40"
        preserveAspectRatio="none"
        style={{ minWidth: '100%', minHeight: '100vh' }}
      >
        {timeline.map(snapshot => {
          return <Dot key={snapshot.startDate} snapshot={snapshot} />;
        })}
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
          "
          fill="none"
          stroke="currentColor"
          strokeWidth="0.2"
        />
      </svg>
    </>
  );
}

export default TimelinePage;
