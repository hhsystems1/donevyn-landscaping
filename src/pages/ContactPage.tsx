import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="relative bg-neutral-800 py-16 border-b border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-4 font-heading text-white uppercase">
            Contact <span className="text-primary-500">Us</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Get in touch for your landscaping and earthwork needs
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 font-heading">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                  <Phone className="text-primary-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                  <p className="text-neutral-400">361-935-3445</p>
                  <p className="text-sm text-neutral-500">Call us for immediate assistance</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                  <Mail className="text-primary-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                  <p className="text-neutral-400">info@donevynlandscaping.com</p>
                  <p className="text-sm text-neutral-500">Send us a message anytime</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                  <MapPin className="text-primary-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Service Area</h3>
                  <p className="text-neutral-400">Serving the local community</p>
                  <p className="text-sm text-neutral-500">Residential & commercial properties</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-neutral-800 p-3 rounded-lg border border-neutral-700">
                  <Clock className="text-primary-500" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                  <div className="text-neutral-400 space-y-1">
                    <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
                    <p>Saturday: 8:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-neutral-800 border border-primary-500/30 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-2">Emergency Services</h3>
              <p className="text-neutral-400 mb-3">
                Need urgent lawn care or storm cleanup? Call us for emergency service.
              </p>
              <a 
                href="tel:361-935-3445" 
                className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors"
              >
                <Phone className="mr-2" size={20} />
                Emergency: 361-935-3445
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 font-heading">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-neutral-800 border border-primary-500/30 rounded-2xl p-6 text-center">
                <CheckCircle className="text-primary-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-neutral-400">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-400 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-400 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="estimate">Request Estimate</option>
                    <option value="service">Service Question</option>
                    <option value="complaint">Complaint</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us about your lawn care needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-500 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
