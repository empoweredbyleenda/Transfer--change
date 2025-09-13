import React from "react";
import { Heart, Mail, Phone, MapPin, ArrowUp, Clock, Shield } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Leenda", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Packages & Pricing", href: "#packages" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "One-on-One Coaching", href: "#services" },
    { name: "Relationship Coaching", href: "#services" },
    { name: "Youth Empowerment", href: "#services" },
    { name: "Family Communication", href: "#services" },
    { name: "Life Coaching", href: "#services" },
    { name: "Healing & Empowerment", href: "#services" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Leenda Bolden</h3>
                <p className="text-sm text-coaching font-medium">Certified NLP & Life Coach</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to helping individuals, couples, youth, and families build resilience, 
              confidence, and stronger connections through personalized coaching.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="tel:323-613-5153" className="text-sm text-gray-300 hover:text-white">
                  (323) 613-5153
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:SnatchedBeauties21@gmail.com" className="text-sm text-gray-300 hover:text-white">
                  SnatchedBeauties21@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  Los Angeles, CA & Virtual Worldwide
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Started</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                Ready to begin your transformation? Book your free consultation today.
              </p>
              
              <div className="space-y-3">
                <a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Book Free Consultation
                </a>
                <a
                  href="tel:323-613-5153"
                  className="block w-full bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Call (323) 613-5153
                </a>
              </div>
              
              {/* Hours */}
              <div className="pt-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="w-4 h-4 text-purple-400" />
                  <h5 className="text-sm font-semibold text-gray-200">Office Hours</h5>
                </div>
                <div className="text-xs text-gray-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Mon-Fri:</span>
                    <span>9AM-7PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10AM-4PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="border-t border-gray-800 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start space-x-3 mb-4">
            <Shield className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-semibold text-gray-200 mb-2">Important Legal Notice</h5>
              <p className="text-xs text-gray-400 leading-relaxed">
                Services are coaching, educational, and empowerment-based. I am not a licensed therapist, 
                psychologist, or medical provider. Coaching is not a substitute for therapy, diagnosis, or 
                medical treatment. If you are experiencing mental health concerns, please consult with a 
                qualified mental health professional.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Leenda Bolden - Certified NLP & Life Coach. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Cancellation Policy
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Resources */}
      <div className="bg-red-900 border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-xs text-red-200">
              Crisis Support: National Suicide Prevention Lifeline: 988 | Crisis Text Line: Text HOME to 741741 | Emergency: 911
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;