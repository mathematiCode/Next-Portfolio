'use client';
import { Github, ExternalLink, ArrowBigLeft } from 'lucide-react';
import { ProjectType } from '@/types';
import Image from 'next/image';
import challenges from '../data/challenges.json';
import { useState } from 'react';

interface ProjectProps {
  project: ProjectType;
}

function LongProject({ project }: ProjectProps) {
  const emptyChallenge = {
    id: '',
    project: '',
    summary: '',
    challenge: '',
    explanation: '',
    codeSnippet: '',
  };
  const [currentChallenge, setCurrentChallenge] = useState(emptyChallenge);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px]  items-center justify-start gap-4 p-6 w-full xl:w-2/3 min-h-[550px] rounded-lg bg-[#c5faf7] border-black border-2 relative shadow-[5px_5px_#3e3e3e]">
      {currentChallenge.id === '' ? (
        <>
          <div className="flex flex-col h-full justify-between text-left">
            <div className="flex flex-col gap-4 text-left">
              <h2 className="text-3xl font-bold text-[#1a5a4a] mb-2 text-left">
                {project.name}
              </h2>

              {project.description && (
                <p className="text-gray-700 text-md leading-relaxed text-left">
                  {project.description}
                </p>
              )}

              {project.features && project.features.length > 0 && (
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-md font-semibold text-gray-800 text-left">
                    Key Features:
                  </h3>
                  <ul className="flex flex-col gap-1.5 text-left">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-md text-gray-700 flex items-start gap-2 text-left"
                      >
                        <span className="text-[#1a5a4a] mt-0.5">•</span>
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
                    className="px-3 py-1 rounded-full bg-[#c5faf7] text-[#1a5a4a] text-sm font-medium border border-[#1a5a4a]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.challenges && project.challenges.length > 0 && (
                <div className="flex flex-col gap-2 mt-2 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 text-left">
                    Challenges:
                  </h3>
                  <div className="flex flex-col gap-4 justify-start">
                    {project.challenges.map(challengeId => {
                      const challenge = challenges.find(
                        ch => ch.id === challengeId
                      );
                      return (
                        <button
                          key={challengeId}
                          onClick={() =>
                            setCurrentChallenge(challenge || emptyChallenge)
                          }
                          className="challenge-button inline-flex items-center px-4 py-2.5 bg-white text-[#1a5a4a] border-2 border-[#1a5a4a] rounded-lg hover:bg-[#1a5a4a] hover:text-white transition-all duration-200 font-medium text-sm shadow-sm hover:shadow-md hover:scale-[1.02]"
                        >
                          {challenge?.summary || challengeId.replace(/-/g, ' ')}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {project.image && (
            <div className="flex flex-col gap-6 items-center justify-center">
              <Image
                src={project.image}
                alt={project.name}
                width={300}
                height={400}
                className="rounded-md border-black border-2 object-cover h-full w-full"
              />
              <div className="flex gap-3 mt-auto justify-start">
                <a
                  href={project.deployed}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 px-4 py-2 bg-teal-700 text-white rounded-md hover:bg-teal-600 transition-colors font-medium text-lg"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener"
                  className="flex items-center gap-2 px-4 py-2 bg-white text-[#1a5a4a] border-2 border-[#1a5a4a] rounded-md hover:bg-[#f0fdfc] transition-colors font-medium text-xl"
                >
                  <Github size={20} />
                  Code
                </a>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="col-span-full">
          {/* <h2>
            {currentChallenge.summary}
            </h2> */}
          <h2 className="text-start text-xl font-bold text-[#1a5a4a] mb-2">
            The Challenge
          </h2>
          <p>{currentChallenge.challenge}</p>
          <h2 className="text-start text-xl font-bold text-[#1a5a4a] mb-2">
            The Solution
          </h2>
          <p>{currentChallenge.explanation}</p>
          <button onClick={() => setCurrentChallenge(emptyChallenge)}>
            <ArrowBigLeft className="absolute left-4 top-4 cursor-pointer transition-all duration-200 hover:scale-118 hover:opacity-80 active:scale-95" />
          </button>
        </div>
      )}
    </div>
  );
}

export default LongProject;
