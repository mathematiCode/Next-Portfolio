import { Github, Linkedin, MapPin, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 lg:w-2/3 w-full">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="section-title animate-fade-in-up text-3xl font-bold text-[#1a5a4a] mb-2">
            Let&apos;s Connect
          </h2>
          <p className="text-xl animate-fade-in-up animate-delay-100">
            I&apos;d love to discuss opportunities in educational technology and
            development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 lg:p-12 shadow-xl animate-fade-in-up animate-delay-200">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Whether you&apos;re looking for a developer passionate about
                  education, want to collaborate on an edtech project, or just
                  want to chat about making math more accessible, I&apos;d love
                  to hear from you!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:juliannamessineo@gmail.com"
                        className="hover:underline"
                      >
                        juliannamessineo@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-semibold">Location</p>
                      <p>Austin, TX</p>
                      <p className="text-sm">
                        Available for remote work or relocation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Follow My Work</h3>
                <p className="text-lg mb-8">
                  Check out my latest projects and educational content on these
                  platforms:
                </p>

                <div className="space-y-4">
                  <a
                    href="https://github.com/mathematiCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Github size={24} />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-sm">@mathematiCode</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/julianna-messineo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin size={24} />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-sm">Professional Profile</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p>
            © 2025 Julianna Messineo. Built with passion for education and clean
            code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
