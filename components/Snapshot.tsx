import type { SnapshotType, ProjectType } from '../types';
import Project from './Project';
import projects from '../data/projects.json';
import { useState } from 'react';
import { ArrowBigLeft } from 'lucide-react';

function Snapshot({ snapshot }: { snapshot: SnapshotType }) {
  const emptyProject: ProjectType = {
    id: '',
    name: '',
    stack: [''],
    image: '',
    deployed: '',
    github: '',
  };
  const [currentProject, setCurrentProject] = useState(emptyProject);

  function handleProjectClick(projectId: string) {
    const selected = projects.filter(project => project.id === projectId)[0];
    setCurrentProject(selected);
  }
  return (
    <div
      className={`snapshot-card py-10 lg:px-7 px-5 relative m-5 h-[500px] overflow-auto ${
        currentProject.id == '' ? 'items-start' : 'items-center'
      }`}
    >
      {currentProject.id == '' ? (
        <>
          <span className="absolute top-2 right-2 font-semibold bg-[rgba(242, 161, 132, 0.2)]">
            {snapshot.timeframe}
          </span>
          <h2>Learning Focus</h2>
          <p className="text-start">{snapshot.learning}</p>
          <h2>Projects</h2>
          <div className="snapshot-projects">
            {snapshot.projects.map(projID => {
              const project = projects.filter(
                project => project.id === projID
              )[0];
              return (
                <button
                  className="button"
                  key={project.id}
                  onClick={() => handleProjectClick(projID)}
                >
                  {project.name}
                </button>
              );
            })}
          </div>
          {snapshot.books.length > 0 && (
            <>
              <h2>Reading</h2>
              <div className="snapshot-books">
                {snapshot.books.map((book, index) => (
                  <span
                    className="book"
                    key={`${snapshot.startDate}-book-${index}`}
                  >
                    {book.title} by {book.author}
                  </span>
                ))}
              </div>
            </>
          )}
          {snapshot.questions.length > 0 && (
            <>
              <h2>Wonderings</h2>
              <ul className="wonderings">
                {snapshot.questions.map((question, index) => (
                  <li key={`${snapshot.startDate}-question-${index}`}>
                    {question}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      ) : (
        <>
          <ArrowBigLeft
            className="absolute left-2 top-2 cursor-pointer transition-all duration-200 hover:scale-118 hover:opacity-80 active:scale-95"
            onClick={() => setCurrentProject(emptyProject)}
          />
          <Project
            title={currentProject.name}
            stack={currentProject.stack}
            image={currentProject.image}
            deployed={currentProject.deployed}
            github={currentProject.github}
            inTimeline
          />
        </>
      )}
    </div>
  );
}

export default Snapshot;
