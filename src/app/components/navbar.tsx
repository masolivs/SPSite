'use client';

import { useEffect, useState } from 'react';

const Navbar = () => {
  const sections = ['sobre', 'atuacao', 'premiacoes', 'compliance', 'equipe', 'blog', 'contato'];
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  const renderNavItems = () =>
    sections.map((section) => (
      <button
        key={section}
        onClick={() => scrollToSection(section)}
        className={`cursor-pointer transition-all ${
          activeSection === section ? 'font-bold' : ''
        } hover:opacity-80`}
      >
        {section.toUpperCase()}
      </button>
    ));

  return (
    <header className="bg-off-white  top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-center relative">
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-10 text-dark text-[16px] sm:text-[24px] font-tahoma">
            {renderNavItems()}
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden absolute left-4">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-3xl">
                ☰
            </button>
            </div>
        </div>
        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-off-white z-40 md:hidden">
                {/* Close Bottom */}
                <div className="absolute top-6 right-6">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-3xl">
                        ✕
                    </button>
                </div>
                {/* Menu */}
                <nav className="flex flex-col justify-end items-start h-full pb-12 pl-6 gap-4 text-dark text-lg font-tahoma">
                    {renderNavItems()}
                </nav>
            </div>
            )}
    </header>
  );
};

export default Navbar;
