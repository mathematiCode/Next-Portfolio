import projects from '../data/projects.json';
import LongProject from '../components/LongProject';
import Intro from '../components/Intro';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <h1>Julianna Messineo</h1>
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
