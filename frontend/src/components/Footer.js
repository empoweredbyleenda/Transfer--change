import React from "react";
import { Heart, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Mission", href: "#mission" },
    { name: "Programs", href: "#programs" },
    { name: "Impact", href: "#impact" },
    { name: "How to Help", href: "#help" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Back-to-School Drives", href: "#programs" },
    { name: "Community Closet", href: "#programs" },
    { name: "Holiday Programs", href: "#programs" },
    { name: "Emergency Relief", href: "#programs" },
    { name: "Mental Health Support", href: "#programs" },
    { name: "Youth Empowerment", href: "#programs" }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://www.facebook.com/people/Snatched-Beauties-Changing-Lives-Non-Profit/61572380875090/"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/leendabolden"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/snatched_beauties/"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/wk84hkl3_IMG_0996_Original.png"
                alt="Snatched Beauties Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Snatched Beauties</h3>
                <p className="text-sm text-gray-400">Changing Lives</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering underserved youth, families, and individuals in Los Angeles through 
              compassionate support, essential resources, and life-changing opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <div>5710 W Manchester Ave</div>
                  <div>Suite 211 B</div>
                  <div>Los Angeles, CA 90045</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  info@snatchedbeautieschanginglives.org
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

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get Involved</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                Join our mission to change lives in the Los Angeles community.
              </p>
              <div className="space-y-3">
                <a
                  href="#donate"
                  className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Donate Now
                </a>
                <a
                  href="#volunteer"
                  className="block w-full bg-transparent border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Volunteer
                </a>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold mb-3 text-gray-200">Follow Us</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                      >
                        <Icon className="w-4 h-4 text-gray-400 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Snatched Beauties Changing Lives. All rights reserved. | Non-Profit Organization
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">
                Terms of Service
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

      {/* Powered by attribution */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Built with ❤️ to support community impact | 
              <a href="https://app.emergent.sh" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 ml-1">
                Powered by Emergent
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;