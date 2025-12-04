import * as Popover from '@radix-ui/react-popover';
import Snapshot from './Snapshot';
import type { SnapshotType } from '../types';

function Dot({ snapshot }: { snapshot: SnapshotType }) {
  const { x, y } = snapshot.point;
  // const project = projects[0];

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <g>
          <circle cx={x} cy={y} r="0.3" className="dot" />
        </g>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content side="top" sideOffset={5}>
          {/* <Project
            key={project.id}
            title={project.name}
            stack={project.stack}
            image={project.image}
            deployed={project.link}
            github={project.link}
          ></Project> */}
          <Snapshot key={'x' + 'y'} snapshot={snapshot} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default Dot;
