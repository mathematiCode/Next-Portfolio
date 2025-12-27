import { range } from 'lodash';

interface RectangleProps {
  width: number;
  height: number;
  unitSize: number;
  color?: string;
  style?: React.CSSProperties;
}

function Rectangle({
  width,
  height,
  unitSize,
  color = 'transparent',
  ...delegated
}: RectangleProps) {
  const total = width * height;
  return (
    <div
      className="grid w-min h-min gap-0 p-0 touch-none border-2"
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
        gridTemplateColumns: `repeat(${width}, 1fr)`,
        backgroundColor: color,
        // boxShadow: 'rgba(0, 0, 0, 0.83) 0px 5px 10px',
      }}
      {...delegated}
    >
      {range(total).map((unit, index) => (
        <div
          key={index}
          style={{
            width: `${unitSize}px`,
            height: `${unitSize}px`,
            border: '1px solid black',
          }}
        />
      ))}
    </div>
  );
}

export default Rectangle;
