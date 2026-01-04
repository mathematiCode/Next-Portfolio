'use client';

import { useState } from 'react';
import { Github, Linkedin, MapPin, Mail, Copy, Check } from 'lucide-react';
import Calendly from './Calendly';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'juliannamessineo@gmail.com';

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      primary: 'juliannamessineo@gmail.com',
      secondary: null,
      href: 'mailto:juliannamessineo@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      primary: 'Austin, TX',
      secondary: 'Available for remote work or relocation',
      href: null,
    },
    {
      icon: Github,
      title: 'GitHub',
      primary: '@mathemaiCode',
      secondary: null,
      href: 'https://github.com/mathematiCode',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      primary: 'Professional Profile',
      secondary: null,
      href: 'https://linkedin.com/in/julianna-messineo/',
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 pb-12">
      <div className="w-full max-w-4xl">
        {/* Main Card */}
        <div className="bg-secondary/80 rounded-lg p-8 md:p-12 shadow-md-primary border border-primary/10">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl text-primary mb-4 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-primary/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re looking for a developer passionate about
              education, want to collaborate on an edtech project, or just want
              to chat about making math more accessible, I&apos;d love to hear
              from you!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const CardWrapper = item.href ? 'a' : 'div';
              const cardProps = item.href
                ? {
                    href: item.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  }
                : {};

              return (
                <CardWrapper
                  key={index}
                  {...cardProps}
                  className={`group flex items-center gap-4 transition-all duration-300 ${
                    item.href ? 'cursor-pointer hover:translate-x-1' : ''
                  }`}
                >
                  {/* Icon */}
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex items-end">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-primary">
                        {item.title}
                      </h3>
                      <p className="text-primary/80 truncate">{item.primary}</p>
                      {item.secondary && (
                        <p className="text-primary/60 text-sm">
                          {item.secondary}
                        </p>
                      )}
                    </div>
                    {item.title === 'Email' && (
                      <button
                        onClick={handleCopyEmail}
                        className="shrink-0 rounded-md mb-1 hover:bg-primary/10 transition-colors duration-200 group/copy"
                        aria-label="Copy email address"
                        title="Copy email"
                      >
                        {copied ? (
                          <Check
                            className="w-4 h-4 text-green-800"
                            strokeWidth={3}
                          />
                        ) : (
                          <Copy
                            className="w-4 h-4 text-primary/60 group-hover/copy:text-primary transition-colors"
                            strokeWidth={3}
                          />
                        )}
                      </button>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
        <Calendly />
      </div>
    </section>
  );
}

export default Contact;
