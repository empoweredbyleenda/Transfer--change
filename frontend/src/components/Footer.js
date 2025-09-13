import React from "react";
import { Globe, Mail, Phone, MapPin, ArrowUp, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Experiences", href: "#experiences" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const experiences = [
    { name: "Adventure & Hiking", href: "#experiences" },
    { name: "Ocean & Islands", href: "#experiences" },
    { name: "Forest & Wildlife", href: "#experiences" },
    { name: "Cities & Culture", href: "#experiences" },
    { name: "Cultural Immersion", href: "#experiences" },
    { name: "Photography Tours", href: "#experiences" }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/theplanetdiscovery"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/theplanetdiscovery"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://www.twitter.com/planetdiscovery"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://www.youtube.com/theplanetdiscovery"
    }
  ];

  const languages = [
    { flag: "🇺🇸", name: "English" },
    { flag: "🇩🇿", name: "العربية" },
    { flag: "🇹🇳", name: "Tunsi" },
    { flag: "🇳🇬", name: "Igbo" },
    { flag: "🇮🇱", name: "עברית" },
    { flag: "🇫🇷", name: "Français" },
    { flag: "🇪🇸", name: "Español" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 adventure-gradient rounded-full flex items-center justify-center">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">The Planet</h3>
                <p className="text-sm text-adventure font-semibold">Discovery</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting over 1 million travelers worldwide with authentic experiences 
              across 195 countries. Your adventure of a lifetime awaits.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  hello@theplanetdiscovery.com
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  24/7 Emergency Support
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
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Experiences</h4>
            <ul className="space-y-3">
              {experiences.map((experience, index) => (
                <li key={index}>
                  <a
                    href={experience.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {experience.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                Join our global community of adventurers and explorers.
              </p>
              
              <div className="space-y-3">
                <a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-emerald-500 to-orange-500 hover:from-emerald-600 hover:to-orange-600 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Start Your Journey
                </a>
                <a
                  href="#gallery"
                  className="block w-full bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  View Gallery
                </a>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold mb-3 text-gray-200">Follow Our Adventures</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Languages Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <h4 className="text-lg font-semibold mb-4 text-center">We Speak Your Language</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-full transition-colors cursor-pointer"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium text-gray-300">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 The Planet Discovery. All rights reserved. | Connecting travelers worldwide.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                Travel Insurance
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 text-white group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>1M+ Global Community</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>195 Countries Covered</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span>5.0 Average Rating</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;