import { Github, Linkedin, Mail } from 'lucide-react';

function Intro() {
  return (
    <section
      id="home"
      className=" w-full xl:w-2/3 flex items-center justify-center relative flex-col lg:flex-row gap-12"
    >
      <div className="lg:w-1/2 text-center lg:text-left">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
          Product Minded Developer
        </h1>
        <h2 className="text-xl lg:text-2xl mb-6 animate-fade-in-up animate-delay-100">
          Making Math Education Joyful
        </h2>
        <p className="text-xl mb-8 leading-relaxed animate-fade-in-up animate-delay-200">
          Building meaningful and intuitive learning experiences through
          technology, bringing the passion of a former math teacher to modern
          web development.
        </p>

        <div className="flex justify-center lg:justify-start gap-6 mb-8 animate-fade-in-up animate-delay-300">
          <a
            href="https://github.com/mathematiCode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Github size={34} />
          </a>
          <a
            href="mailto:juliannamessineo@gmail.com"
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Mail size={34} />
          </a>
          <a
            href="https://www.linkedin.com/in/julianna-messineo/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={34} />
          </a>
        </div>
      </div>

      {/* Profile Image */}
      <div className="lg:w-1/2 flex justify-center animate-fade-in-right animate-delay-200">
        <div className="relative">
          <div className="absolute inset-0 rounded-full blur-xl opacity-30"></div>
          <img
            src="/headshot.png"
            alt="Julianna Messineo"
            className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4"
          />
        </div>
      </div>
    </section>
  );
}

export default Intro;
