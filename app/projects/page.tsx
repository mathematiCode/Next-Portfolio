import Project from '../../components/Project';
import Navbar from '../../components/Navbar';
import projects from '../../data/projects.json' assert { type: 'json' };

function ProjectsPage() {
  return (
    <>
      <Navbar />
      <h1> Projects </h1>
      <div className="projects">
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
