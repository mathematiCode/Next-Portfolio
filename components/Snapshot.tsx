import type { SnapshotType } from '../types';
import * as Popover from '@radix-ui/react-popover';
import Project from './Project';
import projects from '../data/projects.json';

// startDate: string;
//   endDate: string;
//   learning: string;
//   projects: string[];
//   books: Book[];
//   questions: string[];
//   point: { x: number; y: number };

function Snapshot({ snapshot }: { snapshot: SnapshotType }) {
  return (
    <div className="snapshot-card">
      <span>{snapshot.timeframe}</span>
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
          <a key={`${snapshot.startDate}-book-${index}`}>
            {book.title} by {book.author}
          </a>
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
