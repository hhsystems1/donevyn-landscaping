import React, { useState } from 'react';
import { Calendar, User, MapPin, CheckCircle, Scissors, Trees, Leaf, Droplets } from 'lucide-react';

const SchedulePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    propertySize: '',
    services: [] as string[],
    preferredDate: '',
    preferredTime: '',
    frequency: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    { id: 'mowing', name: 'Lawn Mowing & Edging', icon: Scissors },
    { id: 'landscaping', name: 'Landscaping Design', icon: Trees },
    { id: 'garden', name: 'Garden Maintenance', icon: Leaf },
    { id: 'irrigation', name: 'Irrigation Systems', icon: Droplets }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData({
      ...formData,
      services: formData.services.includes(serviceId)
        ? formData.services.filter(id => id !== serviceId)
        : [...formData.services, serviceId]
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a server
    console.log('Schedule form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading">Schedule Your Service</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Book your lawn care service online and we'll contact you to confirm your appointment
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Request Submitted!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for scheduling with Donevyn's Lawn & Landscaping. We'll contact you within 24 hours to confirm your appointment and provide a detailed estimate.
            </p>
            <div className="bg-white rounded-lg p-4 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• We'll review your service request</li>
                <li>• Contact you to confirm details</li>
                <li>• Provide a detailed estimate</li>
                <li>• Schedule your service appointment</li>
              </ul>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="mr-3 text-green-600" size={28} />
                Your Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Service Address */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="mr-3 text-green-600" size={28} />
                Service Address
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Anytown"
                    />
                  </div>

                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="12345"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="propertySize" className="block text-sm font-medium text-gray-700 mb-2">
                    Property Size *
                  </label>
                  <select
                    id="propertySize"
                    name="propertySize"
                    required
                    value={formData.propertySize}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select property size</option>
                    <option value="small">Small (Under 5,000 sq ft)</option>
                    <option value="medium">Medium (5,000 - 10,000 sq ft)</option>
                    <option value="large">Large (10,000 - 20,000 sq ft)</option>
                    <option value="xlarge">Extra Large (Over 20,000 sq ft)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Services Selection */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Scissors className="mr-3 text-green-600" size={28} />
                Services Needed
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      formData.services.includes(service.id)
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    }"
                  >
                    <input
                      type="checkbox"
                      checked={formData.services.includes(service.id)}
                      onChange={() => handleServiceToggle(service.id)}
                      className="mr-3 h-5 w-5 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <service.icon className="mr-3 text-green-600" size={24} />
                    <span className="font-medium text-gray-900">{service.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Scheduling Preferences */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Calendar className="mr-3 text-green-600" size={28} />
                Scheduling Preferences
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select time preference</option>
                    <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 6:00 PM)</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Frequency *
                  </label>
                  <select
                    id="frequency"
                    name="frequency"
                    required
                    value={formData.frequency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select frequency</option>
                    <option value="one-time">One-time service</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="seasonal">Seasonal</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Please let us know any special requirements or details about your property..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                Schedule Service
              </button>
              <p className="mt-4 text-sm text-gray-500">
                By submitting this form, you agree to be contacted by Donevyn's Lawn & Landscaping
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SchedulePage;
