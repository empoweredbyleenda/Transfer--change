import React, { useState } from "react";
import { Send, MapPin, Mail, MessageCircle, Clock, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    experience: "",
    duration: "",
    budget: "",
    message: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this to your backend
    alert("Thank you for your interest! Our travel experts will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      destination: "",
      experience: "",
      duration: "",
      budget: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "Let's Plan Your Adventure",
      details: ["Tell us your dream destination", "We'll create a personalized experience"],
      action: "Start Planning"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@theplanetdiscovery.com", "Quick response within 24 hours"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: ["24/7 Emergency Support", "Regular inquiries: 24 hours"],
      action: "Contact Now"
    }
  ];

  const experiences = ["Adventure & Hiking", "Ocean & Islands", "Forest & Wildlife", "Cities & Culture", "Cultural Immersion", "Photography Tours", "Custom Experience"];
  const durations = ["3-5 days", "1 week", "2 weeks", "3-4 weeks", "1+ months"];
  const budgets = ["Budget ($500-1500)", "Mid-range ($1500-3000)", "Luxury ($3000-6000)", "Ultra-luxury ($6000+)"];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start Your <span className="text-adventure">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore the world? Our travel experts are here to turn your dreams into reality. 
            Tell us where you want to go, and we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 adventure-gradient rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        {info.title === "Email Us" ? (
                          <a 
                            href="mailto:hello@theplanetdiscovery.com" 
                            className="text-emerald-600 hover:text-emerald-700 font-medium text-sm mt-2 inline-block"
                          >
                            {info.action} →
                          </a>
                        ) : (
                          <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm mt-2">
                            {info.action} →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Proof */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Join Our Global Community</h4>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>1M+ Active Travelers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>195 Countries</span>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Adventure</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
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
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-2">
                  Dream Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Where would you like to go?"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Type
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select experience type</option>
                    {experiences.map((exp) => (
                      <option key={exp} value={exp}>{exp}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-2">
                    Duration
                  </label>
                  <select
                    id="duration"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select duration</option>
                    {durations.map((dur) => (
                      <option key={dur} value={dur}>{dur}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us More *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                  placeholder="Describe your dream adventure, special interests, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-adventure w-full group"
              >
                Start Planning My Adventure
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Our expert travel consultants will respond within 24 hours with a personalized itinerary.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">24/7 Emergency Support</h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Traveling with peace of mind. Our dedicated support team is available around the clock 
              to assist you during your adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-800-PLANET-HELP"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300"
              >
                Emergency Hotline
              </a>
              <a href="mailto:emergency@theplanetdiscovery.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;