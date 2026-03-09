import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className={`text-xl sm:text-2xl font-bold font-heading italic transition-colors ${scrolled ? 'text-white' : 'text-white'}`}>
              Donevyn's
            </h1>
            <span className={`ml-2 text-xs uppercase tracking-widest transition-colors ${scrolled ? 'text-primary-500' : 'text-primary-400'}`}>
              Lawn Care
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all">
              Home
            </a>
            <a href="#services" className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all">
              Services
            </a>
            <a href="#contact" className="px-4 py-2 rounded-lg text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all">
              Contact
            </a>
            <a href="#schedule" className="ml-4 bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-500 transition-all">
              Get a Quote
            </a>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <a href="tel:361-935-3445" className="text-white/80 hover:text-primary-400 transition-colors">
              <Phone size={20} />
            </a>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-neutral-900/95 backdrop-blur-sm rounded-xl mt-2 mb-4 p-4 border border-neutral-800">
            <div className="space-y-2">
              <a href="#home" className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium transition-colors">
                Services
              </a>
              <a href="#contact" className="block px-4 py-3 rounded-lg text-white/80 hover:text-white hover:bg-white/10 font-medium transition-colors">
                Contact
              </a>
              <a href="#schedule" className="block bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-primary-500 transition-colors">
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
