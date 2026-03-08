import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4 font-heading">
              Donevyn's Lawn & Landscaping
            </h3>
            <p className="text-earth-300 mb-4">
              Your trusted partner for professional lawn care and landscaping services. 
              We transform outdoor spaces into beautiful, functional environments that 
              enhance your property's value and curb appeal.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-primary-400">
                <Phone size={20} />
                <span>361-935-3445</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-400">
                <Mail size={20} />
                <span>info@donevynlandscaping.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-primary-400 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-earth-300 hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-earth-300 hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-earth-300 hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-earth-300 hover:text-primary-400 transition-colors">
                  Schedule Service
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-primary-400 mb-4">Business Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary-400" />
                <span className="text-earth-300">Monday - Friday: 7:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary-400" />
                <span className="text-earth-300">Saturday: 8:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary-400" />
                <span className="text-earth-300">Sunday: Closed</span>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <MapPin size={16} className="text-primary-400" />
              <span className="text-earth-300">Serving Your Local Area</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-earth-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-earth-400 text-sm">
              © 2024 Donevyn's Lawn & Landscaping. All rights reserved.
            </p>
            <p className="text-earth-400 text-sm mt-2 md:mt-0">
              Licensed & Insured | Professional Service Guaranteed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
