import { GraduationCap, Code, Heart } from 'lucide-react';
function About() {
  return (
    <section
      id="about"
      className=" m-0 bg-[#c5faf7] rounded-lg border-2 p-4 xl:w-2/3 w-full"
    >
      <div className="text-center">
        <h2 className="section-title animate-fade-in-up text-3xl font-bold text-[#1a5a4a] mb-2">
          About Me
        </h2>
        <p className="text-xl animate-fade-in-up animate-delay-100">
          Bridging education and technology to create meaningful learning
          experiences
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="rounded-2xl p-4 animate-fade-in-up animate-delay-200">
          <p className="text-lg leading-relaxed mb-8">
            I am a frontend developer who enjoys building things to make
            teaching and learning math more joyful. As a former math teacher, I
            have extensive experience crafting meaningful and intuitive
            experiences for learners and hope to continue to do so with
            technology.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <GraduationCap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Education Background
              </h3>
              <p>
                Former math teacher with deep understanding of learning
                processes and student needs
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Code size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p>
                Frontend development with focus on user experience and
                educational technology
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion for EdTech</h3>
              <p>
                Dedicated to making mathematics more accessible and enjoyable
                through technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
