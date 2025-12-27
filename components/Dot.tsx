'use client';

import { useState, useRef, useEffect, useLayoutEffect, RefObject } from 'react';
import * as Popover from '@radix-ui/react-popover';
import Snapshot from './Snapshot';
import type { SnapshotType } from '../types';

function Dot({
  snapshot,
  radius,
  pathRef,
  percent,
  calculatedPoint,
}: {
  snapshot: SnapshotType;
  radius: string;
  pathRef: RefObject<SVGPathElement | null>;
  percent: number;
  calculatedPoint?: { x: number; y: number };
}) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // useLayoutEffect(() => {
  //   // Only calculate if calculatedPoint is not provided
  //   if (calculatedPoint) return;

  //   const path = pathRef.current;
  //   if (!path) return;

  //   const totalLength = path.getTotalLength();
  //   const tempPoint = path.getPointAtLength(totalLength * percent);
  //   setPoint({
  //     x: parseFloat(tempPoint.x.toFixed(2)),
  //     y: parseFloat(tempPoint.y.toFixed(2)),
  //   });
  // }, [pathRef, percent, calculatedPoint]);

  // Use calculatedPoint directly if provided, otherwise use state
  const displayPoint = calculatedPoint;

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpen(false);
      closeTimeoutRef.current = null;
    }, 600);
  };

  return (
    <>
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <circle
              cx={displayPoint?.x}
              cy={displayPoint?.y}
              r={radius}
              fill="#3a3a3b"
              className="dot z-10 cursor-pointer"
            />
          </g>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            side="top"
            sideOffset={5}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Snapshot key={'x' + 'y'} snapshot={snapshot} />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export default Dot;
