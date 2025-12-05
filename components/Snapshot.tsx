import type { SnapshotType } from '../types';
import * as Popover from '@radix-ui/react-popover';
import Project from './Project';
import projects from '../data/projects.json';

function Snapshot({ snapshot }: { snapshot: SnapshotType }) {
  return (
    <div className="snapshot-card items-start relative m-5">
      <span className="absolute top-2 right-2 font-semibold bg-[rgba(242, 161, 132, 0.2)]">
        {snapshot.timeframe}
      </span>
      <h2>Learning Focus</h2>
      <p className="snapshot-learning">{snapshot.learning}</p>
      <h2>Projects</h2>
      <div className="snapshot-projects">
        {snapshot.projects.map(projID => {
          const project = projects.filter(project => project.id === projID)[0];
          console.log(project);
          return (
            <Popover.Root key={`${snapshot.startDate}-${project.id}`}>
              <Popover.Trigger asChild>
                <button>{project.name}</button>
              </Popover.Trigger>
              <Popover.Portal>
                <Popover.Content side="top" sideOffset={5}>
                  <Project
                    title={project.name}
                    stack={project.stack}
                    image={project.image}
                    deployed={project.link}
                    github={project.link}
                  />
                </Popover.Content>
              </Popover.Portal>
            </Popover.Root>
          );
        })}
      </div>
      <h2>Reading</h2>
      <div className="snapshot-books">
        {snapshot.books.map((book, index) => (
          <span className="book" key={`${snapshot.startDate}-book-${index}`}>
            {book.title} by {book.author}
          </span>
        ))}
      </div>
      <h2>Wonderings</h2>
      <ul className="wonderings">
        {snapshot.questions.map((question, index) => (
          <li key={`${snapshot.startDate}-question-${index}`}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default Snapshot;
