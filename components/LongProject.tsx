'use client';
import { Github, ExternalLink } from 'lucide-react';
import { ProjectType } from '@/types';
import Image from 'next/image';

interface ProjectProps {
  project: ProjectType;
}

function LongProject({ project }: ProjectProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px]  items-center justify-start gap-4 p-6 w-full xl:w-2/3 min-h-[500px] rounded-lg bg-surface border-primary border-2 relative shadow-md-primary">
      <div className="flex flex-col h-full justify-between text-left">
        <div className="flex flex-col gap-4 text-left">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-0 text-left">
              {project.name}
            </h2>
            <span className="mt-0">{project.subtitle}</span>
          </div>

          {project.description && (
            <p className="text-base-200 text-md leading-relaxed text-left">
              {project.description}
            </p>
          )}

          {project.features && project.features.length > 0 && (
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-md font-semibold text-base-300 text-left">
                {project.id === 'meet-near-me'
                  ? 'Key Features I Built:'
                  : 'Key Features:'}
              </h3>
              <ul className="flex flex-col gap-1.5 text-left">
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-md text-base-200 flex items-start gap-2 text-left"
                  >
                    <span className="text-primary">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-2 justify-start">
            {project.stack.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-surface text-primary text-sm font-medium border border-primary"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* 
          {project.challenges && project.challenges.length > 0 && (
            <div className="flex flex-col gap-2 mt-2 text-left">
              <h3 className="text-lg font-semibold text-base-300 text-left">
                Challenges:
              </h3>
              <div className="flex flex-col gap-4 justify-start">
                {project.challenges.map(challengeId => {
                  const challenge = challenges.find(
                    ch => ch.id === challengeId
                  );
                  const isPublished =
                    blogPostPublishedStatus[challengeId] ?? false;
                  return (
                    <Link
                      key={challengeId}
                      href={isPublished ? `/blogs/${challengeId}` : '#'}
                      onClick={e => !isPublished && e.preventDefault()}
                      className={`button ${
                        !isPublished
                          ? 'opacity-40 cursor-not-allowed pointer-events-none text-base-100'
                          : ''
                      }`}
                    >
                      {challenge?.summary || challengeId.replace(/-/g, ' ')}
                    </Link>
                  );
                })}
              </div>
            </div>
          )} */}
        </div>
      </div>

      {project.image && (
        <div className="flex flex-col gap-6 items-center justify-center">
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={400}
            className="rounded-md border-primary border-2 object-cover h-full w-full"
            loading="eager"
          />
          <div className="flex gap-3 mt-auto justify-start">
            <a
              href={project.deployed}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-light-accent rounded-md hover:bg-primary-hover transition-colors font-medium text-lg"
            >
              <ExternalLink size={20} />
              Live Demo
            </a>
            {project.github && project.github.trim() !== '' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 px-4 py-2 bg-light-accent text-primary border-2 border-primary rounded-md hover:bg-light-accent-hover transition-colors font-medium text-xl"
              >
                <Github size={20} />
                Code
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default LongProject;
