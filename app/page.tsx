import projects from '../data/projects.json';
import LongProject from '../components/LongProject';
import Intro from '../components/Intro';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <h1>Julianna Messineo</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {['React', 'Next JS', 'Golang', 'Tailwind', 'Alpine JS', 'HTMX'].map(
          tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md bg-[#c5faf7] text-[#1a5a4a] text-sm font-medium border border-[#1a5a4a]"
            >
              {tech}
            </span>
          )
        )}
      </div>
      <main className="flex w-full flex-col py-10 items-center gap-16">
        <Intro />
        <About />
        <div className="flex flex-col items-center mb-12 justify-center align-middle gap-6">
          {projects.map(project => {
            if (project.priority === 1) {
              return <LongProject key={project.id} project={project} />;
            }
          })}
        </div>
        <Contact />
      </main>
    </div>
  );
}
