import React from 'react';
import { Phone, Star, CheckCircle, Leaf, Trees, Scissors, ArrowRight, Zap } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 pt-32 pb-20 sm:pt-40 sm:pb-28">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80" 
            alt="Beautiful lawn" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800/90 via-primary-700/90 to-primary-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Zap size={16} className="text-primary-300" />
              <span className="text-white/90 text-sm font-medium">Professional Lawn Care Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white font-heading leading-tight">
              Transform Your
              <br />
              <span className="text-primary-200">Outdoor Space</span>
            </h1>
            
            <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-2xl mx-auto font-light">
              Premium lawn care and landscaping services that bring your vision to life
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a href="#schedule" className="btn-primary group">
                <span className="relative z-10 flex items-center">
                  Get Free Estimate
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </span>
              </a>
              <a href="tel:361-935-3445" className="btn-secondary">
                <Phone className="inline mr-2" size={20} />
                361-935-3445
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/80 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80" 
                alt="Landscaping work" 
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Work</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-earth-900 mt-2 mb-4 font-heading">
                Creating Beautiful Outdoor Spaces
              </h2>
              <p className="text-earth-600">
                From residential lawns to commercial properties, we bring expertise and dedication to every project.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-earth-100">
              <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
              <div className="text-sm text-earth-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-earth-100">
              <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
              <div className="text-sm text-earth-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-earth-100">
              <div className="text-3xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-sm text-earth-600">Satisfaction</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-earth-100">
              <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm text-earth-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-earth-900 mt-3 mb-4 font-heading">
              Excellence in Every Detail
            </h2>
            <p className="text-earth-600 max-w-xl mx-auto">
              Professional lawn care with a commitment to quality and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-100">
              <img 
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&q=80" 
                alt="Quality lawn service" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-earth-900 mb-2">Quality Guaranteed</h3>
                <p className="text-earth-600 text-sm">Professional service with meticulous attention to detail.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-100">
              <img 
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" 
                alt="Eco friendly" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Leaf className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-earth-900 mb-2">Eco-Friendly</h3>
                <p className="text-earth-600 text-sm">Sustainable practices that protect your lawn and environment.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-earth-100">
              <img 
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80" 
                alt="Expert team" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Star className="text-primary-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-earth-900 mb-2">Expert Team</h3>
                <p className="text-earth-600 text-sm">Certified professionals with years of experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-earth-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-earth-900 mt-3 mb-4 font-heading">
              What We Offer
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-earth-100">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <Scissors className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-earth-900 mb-1">Lawn Mowing</h3>
              <p className="text-sm text-earth-600">Regular mowing and edging</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-earth-100">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <Trees className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-earth-900 mb-1">Landscaping</h3>
              <p className="text-sm text-earth-600">Custom design & installation</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-earth-100">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <Leaf className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-earth-900 mb-1">Garden Care</h3>
              <p className="text-sm text-earth-600">Planting and maintenance</p>
            </div>

            <div className="bg-white rounded-xl p-5 shadow-sm border border-earth-100">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                <CheckCircle className="text-primary-600" size={20} />
              </div>
              <h3 className="font-semibold text-earth-900 mb-1">Clean-up</h3>
              <p className="text-sm text-earth-600">Seasonal debris removal</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#services" className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700">
              View All Services
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
            Ready to Transform Your Lawn?
          </h2>
          <p className="text-white/80 mb-8">
            Get your free estimate today
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#schedule" className="bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors">
              Schedule Service
            </a>
            <a href="tel:361-935-3445" className="bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold border border-white/30 hover:bg-primary-600 transition-colors">
              Call 361-935-3445
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
