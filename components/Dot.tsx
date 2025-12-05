'use client';

import { useState, useRef, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import Snapshot from './Snapshot';
import type { SnapshotType } from '../types';

function Dot({ snapshot, radius }: { snapshot: SnapshotType; radius: string }) {
  const { x, y } = snapshot.point;
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <g onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <circle cx={x} cy={y} r={radius} className="dot z-10" />
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
  );
}

export default Dot;
