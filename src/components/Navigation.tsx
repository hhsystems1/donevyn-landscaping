import React, { useState, useEffect } from 'react';
import { Home, Wrench, Phone, Calendar, X, ChevronUp } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 50);
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
      
      // Close mobile menu on scroll
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#home', icon: Home, label: 'Home' },
    { href: '#services', icon: Wrench, label: 'Services' },
    { href: '#contact', icon: Phone, label: 'Contact' },
    { href: '#schedule', icon: Calendar, label: 'Quote' },
  ];

  return (
    <>
      {/* Desktop Navigation - Top Bar */}
      <nav 
        className={`fixed top-0 w-full z-50 hidden md:block transition-all duration-500 ease-out ${
          scrolled 
            ? 'bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 translate-y-0' 
            : 'bg-transparent translate-y-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#home" className="flex items-center group">
              <h1 className="text-2xl font-bold font-heading italic text-white group-hover:text-primary-400 transition-colors">
                Donevyn's
              </h1>
              <span className="ml-2 text-xs uppercase tracking-widest text-primary-500">
                Lawn Care
              </span>
            </a>

            <div className="flex items-center space-x-1">
              {navLinks.slice(0, 3).map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#schedule" 
                className="ml-4 bg-primary-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-600/25"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Floating Bottom Bar */}
      <div className="md:hidden">
        {/* Top Bar Mobile - Logo only */}
        <nav 
          className={`fixed top-0 w-full z-50 transition-all duration-500 ${
            scrolled 
              ? 'bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800' 
              : 'bg-transparent'
          }`}
        >
          <div className="px-4 py-4 flex justify-between items-center">
            <a href="#home" className="flex items-center">
              <h1 className="text-xl font-bold font-heading italic text-white">
                Donevyn's
              </h1>
              <span className="ml-2 text-xs uppercase tracking-widest text-primary-500">
                Lawn Care
              </span>
            </a>
          </div>
        </nav>

        {/* Floating Bottom Navigation */}
        <div 
          className={`fixed bottom-6 left-4 right-4 z-50 transition-all duration-500 ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          <div className="bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-neutral-700/50 shadow-2xl shadow-black/50 p-2">
            <div className="flex items-center justify-around">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex flex-col items-center p-3 rounded-xl text-white/60 hover:text-primary-400 hover:bg-white/5 transition-all duration-300 min-w-[64px]"
                >
                  <link.icon size={22} strokeWidth={1.5} />
                  <span className="text-[10px] mt-1 font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Expanded Menu Overlay */}
        <div 
          className={`fixed inset-0 z-40 transition-all duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div 
            className={`absolute bottom-24 left-4 right-4 bg-neutral-900 rounded-2xl border border-neutral-700 p-4 shadow-2xl transition-all duration-300 ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-neutral-800">
              <span className="text-white font-semibold">Quick Actions</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-2">
              <a 
                href="tel:361-935-3445"
                className="flex items-center p-4 rounded-xl bg-primary-600/20 border border-primary-600/30 text-white hover:bg-primary-600/30 transition-colors"
              >
                <Phone className="mr-3 text-primary-500" size={22} />
                <div>
                  <div className="font-semibold">Call Now</div>
                  <div className="text-sm text-primary-400">361-935-3445</div>
                </div>
              </a>
              <a 
                href="#schedule"
                onClick={() => setIsOpen(false)}
                className="flex items-center p-4 rounded-xl bg-white/5 border border-neutral-700 text-white hover:bg-white/10 transition-colors"
              >
                <Calendar className="mr-3 text-neutral-400" size={22} />
                <div>
                  <div className="font-semibold">Request Quote</div>
                  <div className="text-sm text-neutral-500">Free estimate</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* FAB for extra options - above navbar */}
        <button
          onClick={toggleMenu}
          className={`fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary-500 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
          }`}
        >
          {isOpen ? <X size={22} /> : <ChevronUp size={22} />}
        </button>
      </div>
    </>
  );
};

export default Navigation;
