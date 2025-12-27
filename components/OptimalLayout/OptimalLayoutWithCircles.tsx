import { OptimalLayout } from './OptimalLayout';
import { calculateOptimalSize } from '@/utils/calculateOptimalSize';
import { range } from 'lodash';
import './styles.css';

function OptimalLayoutWithCircles({
  numItems,
  width,
  height,
}: {
  numItems: number;
  width: number;
  height: number;
}) {
  const { itemsPerRow, numRows } = calculateOptimalSize(
    width,
    height,
    numItems
  );
  return (
    <div className="w-fit justify-self-center text-center">
      <OptimalLayout
        width={width}
        height={height}
        horizontalSpacing={2}
        verticalSpacing={2}
        borderColor="#292D3E"
      >
        {range(numItems).map((item: number, index: number) => {
          return (
            <div
              className="bg-[#292D3E] w-full h-full rounded-full"
              key={index}
            ></div>
          );
        })}
      </OptimalLayout>
      <span>Items Per Row: {itemsPerRow}</span>
    </div>
  );
}

export default OptimalLayoutWithCircles;
