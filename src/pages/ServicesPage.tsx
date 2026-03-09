import React from 'react';
import { Scissors, Trees, Leaf, Sun, Wind, Trash2, CheckCircle, Tractor, Ruler } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Tractor,
      title: "Earthwork & Grading",
      description: "Professional site preparation including excavation, land leveling, and grading for optimal drainage and foundation work.",
      features: ["Land clearing", "Site prep", "Trenching", "Drainage solutions"]
    },
    {
      icon: Ruler,
      title: "Landscaping Design",
      description: "Complete landscape design and installation to transform your outdoor space into a beautiful functional environment.",
      features: ["Custom design plans", "Hardscape installation", "Retaining walls", "Outdoor living spaces"]
    },
    {
      icon: Scissors,
      title: "Lawn Mowing & Maintenance",
      description: "Professional mowing services with routine maintenance to keep your property pristine year-round.",
      features: ["Weekly/Bi-weekly mowing", "Precision edging", "Fertilizing", "Clean-up included"]
    },
    {
      icon: Trees,
      title: "Tree & Shrub Care",
      description: "Professional tree and shrub maintenance including pruning, removal, and health assessments.",
      features: ["Pruning & trimming", "Tree removal", "Stump grinding", "Health assessments"]
    },
    {
      icon: Leaf,
      title: "Garden & Bed Maintenance",
      description: "Expert garden care including planting, mulching, and seasonal maintenance for thriving landscapes.",
      features: ["Planting services", "Mulching", "Weed control", "Seasonal clean-up"]
    },
    {
      icon: Sun,
      title: "Irrigation Systems",
      description: "Installation and maintenance of efficient irrigation systems to keep your landscape properly watered.",
      features: ["System installation", "Seasonal start-up", "Repair services", "Water conservation"]
    },
    {
      icon: Wind,
      title: "Aeration & Seeding",
      description: "Core aeration and overseeding services to improve soil health and promote thick, lush grass.",
      features: ["Core aeration", "Overseeding", "Soil improvement", "Thatch removal"]
    },
    {
      icon: Trash2,
      title: "Debris & Clean-up",
      description: "Comprehensive clean-up services including leaf removal, debris clearing, and seasonal preparation.",
      features: ["Fall leaf removal", "Storm cleanup", "Debris hauling", "Property clearing"]
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="relative bg-neutral-800 py-16 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading text-white uppercase">
            Our <span className="text-primary-500">Services</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Heavy-duty landscaping and earthwork solutions for residential and commercial properties
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 hover:border-primary-500/50 transition-all group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-neutral-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-600/20 transition-colors">
                    <service.icon className="text-primary-500" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-neutral-400 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-400">
                        <CheckCircle className="text-primary-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4 font-heading uppercase">
              Service <span className="text-primary-500">Areas</span>
            </h2>
            <p className="text-lg text-neutral-400">
              Proudly serving residential and commercial properties throughout the region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-4">Residential Services</h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Single-family homes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Townhouses and condos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Apartment complexes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  HOA communities
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900 p-8 rounded-2xl border border-neutral-700">
              <h3 className="text-xl font-bold text-white mb-4">Commercial Services</h3>
              <ul className="space-y-3 text-neutral-400">
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Office buildings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Retail centers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Industrial parks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-primary-500 mr-3" size={20} />
                  Public spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 font-heading text-white uppercase">
            Ready To Get <span className="text-neutral-900">Started?</span>
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#schedule" 
              className="bg-neutral-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-neutral-800 transition-all"
            >
              Request Quote
            </a>
            <a 
              href="tel:361-935-3445" 
              className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-all border-2 border-white/30"
            >
              361-935-3445
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
