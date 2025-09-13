import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Users } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    sessionType: "",
    goals: "",
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
    alert("Thank you for reaching out! I'll contact you within 24 hours to schedule your free consultation.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      sessionType: "",
      goals: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call or Text",
      details: ["(323) 613-5153", "Available for calls & appointments"],
      action: "Call Now",
      href: "tel:323-613-5153"
    },
    {
      icon: Mail,
      title: "Email Me",
      details: ["SnatchedBeauties21@gmail.com", "I respond within 24 hours"],
      action: "Send Email",
      href: "mailto:SnatchedBeauties21@gmail.com"
    },
    {
      icon: MapPin,
      title: "In-Person Sessions",
      details: ["Los Angeles, CA", "Private, comfortable location"],
      action: "Book In-Person",
      href: "#contact"
    },
    {
      icon: MessageCircle,
      title: "Virtual Sessions",
      details: ["Zoom meetings worldwide", "Secure, HIPAA-compliant"],
      action: "Book Virtual",
      href: "#contact"
    }
  ];

  const services = [
    "One-on-One Coaching",
    "Relationship Coaching", 
    "Youth Empowerment Coaching",
    "Family Communication Coaching",
    "Life Coaching",
    "Mood & Motivation Coaching",
    "Stress & Resilience Coaching",
    "Healing & Empowerment Coaching"
  ];

  const sessionTypes = ["In-Person (Los Angeles)", "Virtual (Zoom)", "Not Sure Yet"];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start Your <span className="text-coaching">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your journey to growth and empowerment starts here. Take the first step today 
            with a free consultation call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="card-hover bg-gray-50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        <a 
                          href={info.href}
                          className="text-purple-600 hover:text-purple-700 font-medium text-sm mt-2 inline-block"
                        >
                          {info.action} →
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
                <h4 className="text-lg font-semibold text-gray-900">Availability</h4>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">By appointment</span>
                </div>
                <div className="mt-4 p-3 bg-white rounded-lg border border-purple-200">
                  <div className="flex items-center space-x-2 text-green-600">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-medium">Currently accepting new clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Free Consultation</h3>
            
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
                    className="form-input"
                    placeholder="Your full name"
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="(323) 123-4567"
                  />
                </div>
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
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="sessionType" className="block text-sm font-medium text-gray-700 mb-2">
                    Session Preference
                  </label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    value={formData.sessionType}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    <option value="">Select preference</option>
                    {sessionTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  What are your main goals?
                </label>
                <input
                  type="text"
                  id="goals"
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g., Build confidence, improve relationships, reduce stress..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell me more about what brings you here *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="form-textarea"
                  placeholder="Share what's on your mind and what you'd like to work on together..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full group"
              >
                Book Free Consultation Call
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                I'll contact you within 24 hours to schedule your free 15-minute consultation call.
              </p>
            </form>
          </div>
        </div>

        {/* Emergency Resources */}
        <div className="mt-16 bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-red-800 mb-3">
              If You're in Crisis
            </h4>
            <p className="text-red-700 mb-4">
              If you're experiencing thoughts of self-harm or are in immediate danger, 
              please reach out for immediate help:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:988" 
                className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                Call 988 - Crisis Lifeline
              </a>
              <a 
                href="tel:911" 
                className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
              >
                Call 911 - Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;