import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white font-heading italic">Donevyn's</h2>
            <p className="text-primary-500 text-xs uppercase tracking-widest">Lawn Care & Landscaping</p>
          </div>

          {/* Services */}
          <div className="text-center">
            <p className="text-primary-500 font-semibold text-sm mb-2">Services</p>
            <p className="text-neutral-400 text-sm">Lawn Maintenance • Earthwork & Grading</p>
            <p className="text-neutral-400 text-sm">Landscaping Design</p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <a href="tel:361-935-3445" className="text-white font-bold text-lg hover:text-primary-500 transition-colors">
              361-935-3445
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-neutral-800">
          <p className="text-neutral-500 text-sm">EST. 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
