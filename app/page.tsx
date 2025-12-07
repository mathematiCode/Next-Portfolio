import projects from '../data/projects.json';
import Project from '../components/Project';
import {
  Linkedin,
  Github,
  Mail,
  GraduationCap,
  Heart,
  Code,
  MapPin,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans">
      <h1>Julianna Messineo</h1>
      <span className="text-xl">Product Minded Developer</span>
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 h-full sm:items-start">
        <section
          id="home"
          className="geometric-bg min-h-screen flex items-center justify-center relative"
        >
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Text Content */}
              <div className="lg:w-1/2 text-center lg:text-left">
                <h1
                  className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up"
                  style={{ color: 'var(--accent-text)' }}
                >
                  Frontend Developer
                </h1>
                <h2
                  className="text-2xl lg:text-3xl mb-6 animate-fade-in-up animate-delay-100"
                  style={{ color: 'var(--primary-text)' }}
                >
                  Making Math Education Joyful
                </h2>
                <p
                  className="text-xl mb-8 leading-relaxed animate-fade-in-up animate-delay-200"
                  style={{ color: 'var(--secondary-text)' }}
                >
                  Building meaningful and intuitive learning experiences through
                  technology, bringing the passion of a former math teacher to
                  modern web development.
                </p>

                <div className="flex justify-center lg:justify-start gap-6 mb-8 animate-fade-in-up animate-delay-300">
                  <a
                    href="https://github.com/mathematiCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'var(--secondary-bg)',
                      color: 'var(--primary-text)',
                      boxShadow: '0 4px 15px var(--shadow-light)',
                    }}
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:juliannamessineo@gmail.com"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'var(--secondary-bg)',
                      color: 'var(--primary-text)',
                      boxShadow: '0 4px 15px var(--shadow-light)',
                    }}
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/julianna-messineo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full transition-all duration-300 hover:scale-110"
                    style={{
                      backgroundColor: 'var(--secondary-bg)',
                      color: 'var(--primary-text)',
                      boxShadow: '0 4px 15px var(--shadow-light)',
                    }}
                  >
                    <Linkedin size={24} />
                  </a>
                </div>

                <button className="btn-primary animate-fade-in-up animate-delay-400">
                  Learn More About Me
                </button>
              </div>

              {/* Profile Image */}
              <div className="lg:w-1/2 flex justify-center animate-fade-in-right animate-delay-200">
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-30"
                    style={{ backgroundColor: 'var(--primary-accent)' }}
                  ></div>
                  <img
                    src="/headshot.png"
                    alt="Julianna Messineo"
                    className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4"
                    style={{ borderColor: 'var(--secondary-bg)' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="py-20"
          style={{ backgroundColor: 'var(--primary-bg)' }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title animate-fade-in-up">About Me</h2>
              <p
                className="text-xl animate-fade-in-up animate-delay-100"
                style={{ color: 'var(--secondary-text)' }}
              >
                Bridging education and technology to create meaningful learning
                experiences
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div
                className="rounded-2xl p-8 lg:p-12 shadow-xl animate-fade-in-up animate-delay-200"
                style={{ backgroundColor: 'var(--secondary-bg)' }}
              >
                <p
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: 'var(--primary-text)' }}
                >
                  I am a frontend developer who enjoys building things to make
                  teaching and learning math more joyful. As a former math
                  teacher, I have extensive experience crafting meaningful and
                  intuitive experiences for learners and hope to continue to do
                  so with technology.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center group">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'var(--accent-bg)' }}
                    >
                      <GraduationCap
                        size={32}
                        style={{ color: 'var(--primary-accent)' }}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      Education Background
                    </h3>
                    <p style={{ color: 'var(--secondary-text)' }}>
                      Former math teacher with deep understanding of learning
                      processes and student needs
                    </p>
                  </div>

                  <div className="text-center group">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'var(--accent-bg)' }}
                    >
                      <Code
                        size={32}
                        style={{ color: 'var(--primary-accent)' }}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      Technical Skills
                    </h3>
                    <p style={{ color: 'var(--secondary-text)' }}>
                      Frontend development with focus on user experience and
                      educational technology
                    </p>
                  </div>

                  <div className="text-center group">
                    <div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: 'var(--accent-bg)' }}
                    >
                      <Heart
                        size={32}
                        style={{ color: 'var(--primary-accent)' }}
                      />
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      Passion for EdTech
                    </h3>
                    <p style={{ color: 'var(--secondary-text)' }}>
                      Dedicated to making mathematics more accessible and
                      enjoyable through technology
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-[repeat(auto-fit,450px)] w-full mb-12 justify-center align-middle gap-6">
          {projects.map(project => {
            if (project.priority === 1) {
              return (
                <div
                  className="flex flex-col items-center gap-4 w-[450px] h-[450px] rounded-lg bg-[#c5faf7] border-black border-2 relative shadow-[5px_5px_#3e3e3e]"
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
            }
          })}
        </div>
        <section
          id="contact"
          className="py-20"
          style={{ backgroundColor: 'var(--primary-bg)' }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="section-title animate-fade-in-up">
                Let's Connect
              </h2>
              <p
                className="text-xl animate-fade-in-up animate-delay-100"
                style={{ color: 'var(--secondary-text)' }}
              >
                I'd love to discuss opportunities in educational technology and
                frontend development
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div
                className="rounded-2xl p-8 lg:p-12 shadow-xl animate-fade-in-up animate-delay-200"
                style={{ backgroundColor: 'var(--secondary-bg)' }}
              >
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      Get In Touch
                    </h3>
                    <p
                      className="text-lg mb-8 leading-relaxed"
                      style={{ color: 'var(--primary-text)' }}
                    >
                      Whether you're looking for a frontend developer passionate
                      about education, want to collaborate on an edtech project,
                      or just want to chat about making math more accessible,
                      I'd love to hear from you!
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--accent-bg)' }}
                        >
                          <Mail
                            size={20}
                            style={{ color: 'var(--primary-accent)' }}
                          />
                        </div>
                        <div>
                          <p
                            className="font-semibold"
                            style={{ color: 'var(--accent-text)' }}
                          >
                            Email
                          </p>
                          <a
                            href="mailto:juliannamessineo@gmail.com"
                            className="hover:underline"
                            style={{ color: 'var(--secondary-text)' }}
                          >
                            juliannamessineo@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: 'var(--accent-bg)' }}
                        >
                          <MapPin
                            size={20}
                            style={{ color: 'var(--primary-accent)' }}
                          />
                        </div>
                        <div>
                          <p
                            className="font-semibold"
                            style={{ color: 'var(--accent-text)' }}
                          >
                            Location
                          </p>
                          <p style={{ color: 'var(--secondary-text)' }}>
                            Austin, TX
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: 'var(--secondary-text)' }}
                          >
                            Available for remote work or relocation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-2xl font-bold mb-6"
                      style={{ color: 'var(--accent-text)' }}
                    >
                      Follow My Work
                    </h3>
                    <p
                      className="text-lg mb-8"
                      style={{ color: 'var(--primary-text)' }}
                    >
                      Check out my latest projects and educational content on
                      these platforms:
                    </p>

                    <div className="space-y-4">
                      <a
                        href="https://github.com/mathematiCode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: 'var(--accent-bg)' }}
                      >
                        <Github
                          size={24}
                          style={{ color: 'var(--primary-accent)' }}
                        />
                        <div>
                          <p
                            className="font-semibold"
                            style={{ color: 'var(--accent-text)' }}
                          >
                            GitHub
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: 'var(--secondary-text)' }}
                          >
                            @mathematiCode
                          </p>
                        </div>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/julianna-messineo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                        style={{ backgroundColor: 'var(--accent-bg)' }}
                      >
                        <Linkedin
                          size={24}
                          style={{ color: 'var(--primary-accent)' }}
                        />
                        <div>
                          <p
                            className="font-semibold"
                            style={{ color: 'var(--accent-text)' }}
                          >
                            LinkedIn
                          </p>
                          <p
                            className="text-sm"
                            style={{ color: 'var(--secondary-text)' }}
                          >
                            Professional Profile
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p style={{ color: 'var(--secondary-text)' }}>
                © 2025 Julianna Messineo. Built with passion for education and
                clean code.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
