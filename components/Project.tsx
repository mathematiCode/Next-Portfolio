import Image from 'next/image';

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
      <h2 className="mb-0 mt-2 text-2xl">{title}</h2>
      <div className="flex flex-wrap m-1 mx-3 gap-2">
        {stack.map((item: string) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      {image && (
        <Image
          alt=""
          width={400}
          height={300}
          className="rounded-md border-black border-2 w-4/5"
          src={image}
        />
      )}
      <div className="links">
        <a href={deployed} target="_blank" rel="noopener">
          See in Action
        </a>
        <a href={github} target="_blank" rel="noopener">
          See on Github
        </a>
      </div>
    </>
  );
}

export default Project;
