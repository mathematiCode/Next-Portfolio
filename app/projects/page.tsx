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
      <p>
        This will eventually be hidden, I'm just using it to develop the look of
        the cards. I don't actually want to show off everything I've ever built
        like this...
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,350px)] mb-12 justify-center align-middle gap-6">
        {projects.map(project => {
          return (
            <div
              className="flex flex-col items-center gap-4 w-[350px] h-[350px] rounded-lg bg-[#c5faf7] border-black border-2 relative shadow-[5px_5px_#3e3e3e]"
              key={project.id}
            >
              <Project
                title={project.name}
                stack={project.stack}
                image={project.image}
                deployed={project.deployed}
                github={project.github}
              ></Project>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProjectsPage;
