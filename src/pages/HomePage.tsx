import React from 'react';
import { Tractor, Ruler, ChevronRight } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="bg-neutral-900">
      {/* Hero Section - Heavy Duty Style */}
      <section id="home" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9d15482442c4?w=1920&q=80" 
            alt="Heavy equipment landscaping" 
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MDAgNjAwIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzI3MjcyNyIvPjwvc3ZnPg==';
            }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>
        </div>

        {/* Decorative Orange Circles - behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border-2 border-primary-500/20 rounded-full pointer-events-none z-0"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Logo Area */}
          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading italic">
              Donevyn's
            </h2>
            <p className="text-primary-500 text-sm uppercase tracking-widest mt-1">Lawn Care & Landscaping</p>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white font-heading uppercase leading-none mb-4">
            <span className="italic">Heavy-Duty</span>
            <br />
            <span className="text-primary-500 italic">Landscaping</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/80 font-medium uppercase tracking-wide mb-2">
            Earthwork & Site Prep
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a 
              href="#services" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-all hover:scale-105"
            >
              View Services
            </a>
            <a 
              href="#schedule" 
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-all hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>

        {/* Phone in corner */}
        <div className="absolute top-24 right-4 sm:right-8 hidden sm:block">
          <a href="tel:361-935-3445" className="text-white/80 text-sm font-medium hover:text-primary-400 transition-colors">
            361-935-3445
          </a>
        </div>
      </section>

      {/* Services Section - Dark Cards */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Lawn Maintenance */}
            <div className="bg-neutral-800 rounded-2xl p-8 text-center border border-neutral-700 hover:border-primary-500/50 transition-all group">
              <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                <svg viewBox="0 0 64 64" className="w-12 h-12 text-primary-500" fill="currentColor">
                  <path d="M8 48h48v4H8zm4-8h4v8H12zm8 0h4v8h-4zm8 0h4v8h-4zm8 0h4v8h-4zm8 0h4v8h-4zm-20-8c0-6.6 5.4-12 12-12s12 5.4 12 12h-24zm12-16c-2.2 0-4 1.8-4 4h8c0-2.2-1.8-4-4-4z"/>
                </svg>
              </div>
              <h3 className="text-primary-500 font-bold text-lg mb-2">Lawn Maintenance</h3>
              <p className="text-neutral-400 text-sm">Routine care, fertilizing, aeration.</p>
            </div>

            {/* Earthwork & Grading */}
            <div className="bg-neutral-800 rounded-2xl p-8 text-center border border-neutral-700 hover:border-primary-500/50 transition-all group">
              <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                <Tractor className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-primary-500 font-bold text-lg mb-2">Earthwork & Grading</h3>
              <p className="text-neutral-400 text-sm">Site prep, land clearing, trenching.</p>
            </div>

            {/* Landscaping Design */}
            <div className="bg-neutral-800 rounded-2xl p-8 text-center border border-neutral-700 hover:border-primary-500/50 transition-all group">
              <div className="w-20 h-20 mx-auto mb-6 bg-neutral-700 rounded-full flex items-center justify-center group-hover:bg-primary-600/20 transition-colors">
                <Ruler className="w-12 h-12 text-primary-500" />
              </div>
              <h3 className="text-primary-500 font-bold text-lg mb-2">Landscaping Design</h3>
              <p className="text-neutral-400 text-sm">Complete property design and installation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Gear Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">Our Gear</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Equipment Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1575425186775-b8de9a427e67?w=400&q=80" 
                alt="Bobcat equipment" 
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzI3MjcyNyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZmE3MzE1Ij5Cb2JjYXQ8L3RleHQ+PC9zdmc+';
                }}
              />
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" 
                alt="Donevyn's truck" 
                className="rounded-xl w-full h-48 object-cover"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzI3MjcyNyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZmE3MzE1Ij5UcnVjazwvdGV4dD48L3N2Zz4=';
                }}
              />
              <img 
                src="https://images.unsplash.com/photo-1581578731123-5d5c2e2e4b4a?w=400&q=80" 
                alt="Fleet truck" 
                className="rounded-xl w-full h-48 object-cover col-span-2"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzI3MjcyNyIvPjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZmE3MzE1Ij5GcmVldCBUcnVjazwvdGV4dD48L3N2Zz4=';
                }}
              />
            </div>

            {/* Text Content */}
            <div className="lg:pl-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Industrial-Grade Equipment,<br />
                <span className="text-primary-500">Professional Results</span>
              </h3>
              <p className="text-neutral-400 mb-6">
                Our Professional Bobcat, commercial fleet, and specialized machinery means we can handle any job - from residential cleanups to large-scale commercial earthwork.
              </p>
              <a href="#services" className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-400 transition-colors group">
                Visit Gallery
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">10+</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">500+</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Projects Done</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">100%</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white">24/7</div>
              <div className="text-primary-100 text-sm uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 font-heading uppercase">
            Ready To Start Your<br />
            <span className="text-primary-500">Project?</span>
          </h2>
          <p className="text-neutral-400 mb-8 text-lg">
            Get a free estimate for your landscaping or earthwork needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#schedule" className="bg-primary-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-500 transition-all hover:scale-105">
              Get a Quote
            </a>
            <a href="tel:361-935-3445" className="border-2 border-neutral-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-primary-500 hover:text-primary-500 transition-all">
              361-935-3445
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
