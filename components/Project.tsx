import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  stack: string[];
  image: string;
  deployed: string;
  github: string;
  inTimeline?: boolean;
}

function Project({ title, stack, image, deployed, github }: ProjectProps) {
  return (
    <>
      <h2 className="my-0 text-2xl">{title}</h2>
      <div className="flex flex-wrap m-1 gap-2">
        {stack.map((item: string) => (
          <span
            className="px-3 py-1 rounded-full bg-surface text-primary text-sm font-medium border border-primary"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      {image && (
        <Image
          alt=""
          width={400}
          height={300}
          className="rounded-md border-primary border-2 w-4/5"
          src={image}
        />
      )}
      <div className="flex gap-3 mt-auto justify-start">
        <a
          href={deployed}
          target="_blank"
          rel="noopener"
          className="flex items-center gap-2 px-4 py-2 bg-primary text-light-accent rounded-md hover:bg-primary-hover transition-colors font-medium text-lg"
        >
          <ExternalLink size={20} />
          Live Demo
        </a>
        {github && github.trim() !== '' && (
          <a
            href={github}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 px-4 py-2 bg-light-accent text-primary border-2 border-primary rounded-md hover:bg-light-accent-hover transition-colors font-medium text-md"
          >
            <Github size={20} />
            Code
          </a>
        )}
      </div>
    </>
  );
}

export default Project;
