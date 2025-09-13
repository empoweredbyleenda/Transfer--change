import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["5710 W Manchester Ave", "Suite 211 B", "Los Angeles, CA 90045"],
      action: "Get Directions"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@snatchedbeautieschanginglives.org", "General inquiries and support"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(323) 613-5153", "Available during business hours"],
      action: "Call Now"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9AM - 5PM", "Saturday: 10AM - 2PM", "Sunday: Closed"],
      action: "Schedule Meeting"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61572380875090",
      color: "text-blue-600 hover:text-blue-700"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/leendabolden",
      color: "text-blue-400 hover:text-blue-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/sb_changinglives?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr",
      color: "text-pink-600 hover:text-pink-700"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/changinglivesla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "text-blue-700 hover:text-blue-800"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? Want to get involved? Need help? 
            We're here and ready to connect with you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="card-hover bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 mb-1">{detail}</p>
                        ))}
                        {info.title === "Call Us" ? (
                          <a 
                            href="tel:323-613-5153" 
                            className="text-purple-600 hover:text-purple-700 font-medium text-sm mt-2 inline-block"
                          >
                            {info.action} →
                          </a>
                        ) : info.title === "Email Us" ? (
                          <a 
                            href="mailto:info@snatchedbeautieschanginglives.org" 
                            className="text-purple-600 hover:text-purple-700 font-medium text-sm mt-2 inline-block"
                          >
                            {info.action} →
                          </a>
                        ) : info.title === "Visit Us" ? (
                          <a 
                            href="https://maps.google.com/?q=5710+W+Manchester+Ave+Suite+211+B+Los+Angeles+CA+90045" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-600 hover:text-purple-700 font-medium text-sm mt-2 inline-block"
                          >
                            {info.action} →
                          </a>
                        ) : (
                          <button className="text-purple-600 hover:text-purple-700 font-medium text-sm mt-2">
                            {info.action} →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-6">Follow Us on Social Media</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Stay connected with our latest updates, events, and community impact stories.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="help">Need Help/Support</option>
                  <option value="partnership">Partnership/Collaboration</option>
                  <option value="media">Media/Press Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help you or how you'd like to get involved..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-full group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                We typically respond within 24-48 hours during business days.
              </p>
            </form>
          </div>
        </div>

        {/* Map or Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Visit Our Los Angeles Location</h3>
            <p className="text-lg mb-6 text-pink-100 max-w-2xl mx-auto">
              Located in the heart of Los Angeles, we're easily accessible and always ready to welcome 
              community members, volunteers, and supporters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://maps.google.com/?q=5710+W+Manchester+Ave+Suite+211+B+Los+Angeles+CA+90045"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary bg-white text-purple-600 hover:bg-gray-100"
              >
                Get Directions
              </a>
              <a href="#programs" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                Learn About Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;