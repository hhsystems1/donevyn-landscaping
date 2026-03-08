import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className={`text-xl sm:text-2xl font-bold font-heading transition-colors ${scrolled ? 'text-primary-800' : 'text-white'}`}>
              Donevyn's
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-primary-50 ${scrolled ? 'text-earth-600' : 'text-white'}`}>
              Home
            </a>
            <a href="#services" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-primary-50 ${scrolled ? 'text-earth-600' : 'text-white'}`}>
              Services
            </a>
            <a href="#contact" className={`px-4 py-2 rounded-xl text-sm font-medium transition-all hover:bg-primary-50 ${scrolled ? 'text-earth-600' : 'text-white'}`}>
              Contact
            </a>
            <a href="#schedule" className="ml-4 bg-primary-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-all hover:shadow-lg">
              Schedule
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-xl transition-colors ${scrolled ? 'text-earth-700 hover:bg-earth-100' : 'text-white hover:bg-white/20'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden glass rounded-2xl mt-2 mb-4 p-4 animate-fade-in">
            <div className="space-y-2">
              <a href="#home" className="block px-4 py-3 rounded-xl text-earth-700 hover:bg-primary-50 font-medium transition-colors">
                Home
              </a>
              <a href="#services" className="block px-4 py-3 rounded-xl text-earth-700 hover:bg-primary-50 font-medium transition-colors">
                Services
              </a>
              <a href="#contact" className="block px-4 py-3 rounded-xl text-earth-700 hover:bg-primary-50 font-medium transition-colors">
                Contact
              </a>
              <a href="#schedule" className="block bg-primary-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:bg-primary-700 transition-colors">
                Schedule Service
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
