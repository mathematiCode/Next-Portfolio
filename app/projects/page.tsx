import Project from '../../components/Project';
import projects from '../../data/projects.json' assert { type: 'json' };

//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr 1fr;
//   justify-content: center;
//   align-items: center;
// gap: 15px;

function ProjectsPage() {
  return (
    <>
      <h1> Projects </h1>
      <div className="grid grid-cols-[repeat(auto-fit,350px)] mb-12 justify-center align-middle gap-6">
        {projects.map(project => {
          return (
            <Project
              key={project.id}
              title={project.name}
              stack={project.stack}
              image={project.image}
              deployed={project.link}
              github={project.link}
            ></Project>
          );
        })}
      </div>
    </>
  );
}

export default ProjectsPage;
