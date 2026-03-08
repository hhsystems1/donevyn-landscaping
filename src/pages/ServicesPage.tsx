import React from 'react';
import { Scissors, Trees, Leaf, Droplets, Sun, Wind, Trash2, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Scissors,
      title: "Lawn Mowing & Edging",
      description: "Professional mowing services with precise edging to create clean, defined borders for your lawn.",
      features: ["Weekly/Bi-weekly mowing", "Precision edging", "Grass cycling", "Clean-up included"]
    },
    {
      icon: Trees,
      title: "Landscaping Design",
      description: "Complete landscape design and installation to transform your outdoor space into a beautiful environment.",
      features: ["Custom design plans", "Plant selection", "Hardscape installation", "Water features"]
    },
    {
      icon: Leaf,
      title: "Garden Maintenance",
      description: "Expert garden care including planting, pruning, and seasonal maintenance for thriving gardens.",
      features: ["Planting services", "Pruning & trimming", "Mulching", "Weed control"]
    },
    {
      icon: Droplets,
      title: "Irrigation Systems",
      description: "Installation and maintenance of efficient irrigation systems to keep your lawn properly watered.",
      features: ["System installation", "Seasonal start-up", "Repair services", "Water conservation"]
    },
    {
      icon: Sun,
      title: "Fertilization Programs",
      description: "Customized fertilization schedules to promote healthy, green grass throughout the growing season.",
      features: ["Soil testing", "Custom programs", "Organic options", "Seasonal treatments"]
    },
    {
      icon: Wind,
      title: "Aeration & Seeding",
      description: "Core aeration and overseeding services to improve soil health and promote thick, lush grass.",
      features: ["Core aeration", "Overseeding", "Soil improvement", "Thatch removal"]
    },
    {
      icon: Trash2,
      title: "Clean-up Services",
      description: "Comprehensive clean-up services including leaf removal, debris clearing, and seasonal preparation.",
      features: ["Fall leaf removal", "Spring clean-up", "Debris hauling", "Storm damage cleanup"]
    },
    {
      icon: CheckCircle,
      title: "Tree & Shrub Care",
      description: "Professional tree and shrub maintenance including pruning, disease treatment, and health assessments.",
      features: ["Pruning & trimming", "Disease treatment", "Tree removal", "Health assessments"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive lawn care and landscaping solutions tailored to your property's needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-green-50 p-6">
                  <service.icon className="text-green-600 mb-4" size={48} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600">
              Proudly serving residential and commercial properties throughout the local area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Residential Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Single-family homes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Townhouses and condos
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Apartment complexes
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  HOA communities
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Office buildings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Retail centers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Industrial parks
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Public spaces
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Contact us for a free consultation and estimate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#schedule" 
              className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              Schedule Consultation
            </a>
            <a 
              href="tel:361-935-3445" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors border-2 border-white"
            >
              Call 361-935-3445
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
