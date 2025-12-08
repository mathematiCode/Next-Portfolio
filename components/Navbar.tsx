'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Check initial size
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-[60px] z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#c5faf7] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center text-lg justify-end gap-6 p-4">
        <Link href="/" className="hover:text-[#1a5a4a] transition-colors">
          Home
        </Link>
        <Link
          href={isMobile ? '/timelineblock' : '/timeline'}
          className="hover:text-[#1a5a4a] transition-colors"
        >
          Learning Journey
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
