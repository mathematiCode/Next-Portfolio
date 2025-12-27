import projects from '../data/projects.json';
import LongProject from '../components/LongProject';
import Intro from '../components/Intro';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <h1>Julianna Messineo</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {['React', 'Next JS', 'Golang', 'Tailwind', 'Alpine JS', 'HTMX'].map(
          tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-[#c5faf7] text-[#292D3E] text-sm font-medium border border-[#292D3E]"
            >
              {tech}
            </span>
          )
        )}
      </div>
      <main className="flex w-full flex-col py-10 px-4 items-center gap-16">
        <Intro />
        <h2 className="font-bold text-2xl ">Projects and Experience</h2>
        <div className="flex flex-col items-center mb-12 justify-center align-middle gap-6">
          {projects.map(project => {
            if (project.priority === 1) {
              return <LongProject key={project.id} project={project} />;
            }
          })}
        </div>
      </main>
    </div>
  );
}
