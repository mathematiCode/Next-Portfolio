import { calculateOptimalSize } from '../../utils/calculateOptimalSize';
import { motion } from 'motion/react';

export const OptimalLayout = ({
  width = 200,
  height = 150,
  horizontalSpacing = 2,
  verticalSpacing = 2,
  children,
}) => {
  const numItems = children.length;
  if (numItems <= 1) {
    console.warn(
      'You are only passing one direct child. This is a layout component that optimizes the size and spacing of many items in a container when they are passed in as direct children. Make sure you are passing your items as direct children nodes wrapped only in a fragment.'
    );
  }
  const { size, itemsPerRow, numRows } = calculateOptimalSize(
    width,
    height,
    numItems
  );

  const itemSize: number = size - Math.max(horizontalSpacing, verticalSpacing);
  if (itemSize < 6) {
    console.warn(
      'Your items are scaling to less than 6 pixels with the current dimensions and spacing. Consider choosing larger dimensions, fewer items, or less spacing.'
    );
  }
  return (
    <motion.div
      layout
      className="container"
      style={{
        width: `${width}px `,
        height: `${height}px`,
        gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
        gridTemplateRows: `repeat(${numRows}, 1fr)`,
        '--size': `${itemSize}px`,
      }}
    >
      {children}
    </motion.div>
  );
};
