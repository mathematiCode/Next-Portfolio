import Image from 'next/image';

interface ProjectProps {
  title: string;
  stack: string[];
  image: string;
  deployed: string;
  github: string;
}

function Project({ title, stack, image, deployed, github }: ProjectProps) {
  return (
    <div className="flex flex-col items-center gap-4 w-[350px] h-[350px] rounded-lg bg-[#c5faf7] border-black border-2 relative shadow-[5px_5px_#3e3e3e]">
      <h2 className="mb-0 mt-2 text-xl">{title}</h2>
      <div className="flex flex-wrap m-1 mx-3 gap-2">
        {stack.map((item: string) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
      {/* {image && (
        <CloudinaryImg className="project-image" cldImg={cld.image(image)} />
      )} */}
      <Image
        alt=""
        width={200}
        height={150}
        className="project-image"
        src={image}
      />
      <div className="links">
        <a href={deployed} target="_blank" rel="noopener">
          See in Action
        </a>
        <a href={github} target="_blank" rel="noopener">
          See on Github
        </a>
      </div>
    </div>
  );
}

export default Project;
