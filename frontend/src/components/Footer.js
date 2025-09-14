import React from "react";
import { Heart, Mail, Phone, MapPin, ArrowUp, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Mission", href: "#mission" },
    { name: "Programs", href: "#programs" },
    { name: "Gallery", href: "#gallery" },
    { name: "Impact", href: "#impact" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Back-to-School Supplies", href: "#programs" },
    { name: "Holiday Turkey Drive", href: "#programs" },
    { name: "Community Closet", href: "#programs" },
    { name: "Health & Wellness", href: "#programs" },
    { name: "Community Partnerships", href: "#programs" },
    { name: "Emergency Assistance", href: "#programs" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Changing Lives</h3>
                <p className="text-sm text-pink-300 font-medium">Snatched Beauties</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to empowering families and strengthening communities through essential programs, 
              resources, and support that create lasting positive change.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-300 flex-shrink-0" />
                <a href="tel:323-613-5153" className="text-sm text-gray-300 hover:text-white">
                  (323) 613-5153
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-pink-300 flex-shrink-0" />
                <a href="mailto:sbchlvs@gmail.com" className="text-sm text-gray-300 hover:text-white">
                  sbchlvs@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-300 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  5710 W. Manchester Ave Ste 211 B<br />
                  Los Angeles, CA 90045
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
                    className="text-gray-300 hover:text-pink-300 transition-colors text-sm"
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
                    className="text-gray-300 hover:text-pink-300 transition-colors text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* How to Help */}
          <div>
            <h4 className="text-lg font-semibold mb-6">How to Help</h4>
            <div className="space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                Join us in making a difference in our community. Every contribution counts.
              </p>
              
              <div className="space-y-3">
                <a
                  href="#donate"
                  className="block w-full bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Make a Donation
                </a>
                <a
                  href="#volunteer"
                  className="block w-full bg-transparent border-2 border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-6 py-3 rounded-full font-semibold text-center transition-all duration-300 text-sm"
                >
                  Volunteer With Us
                </a>
              </div>
              
              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-sm font-semibold text-gray-200 mb-3">Follow Us</h5>
                <div className="flex space-x-3">
                  <a href="https://facebook.com/snatchedbeautieschanginglives" className="w-8 h-8 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://instagram.com/snatchedbeautieschanginglives" className="w-8 h-8 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://linkedin.com/company/snatchedbeautieschanginglives" className="w-8 h-8 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                  <a href="https://twitter.com/sbchanginglives" className="w-8 h-8 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Changing Lives - Snatched Beauties. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-pink-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-purple-200 transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gray-800 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-white text-xl font-bold group-hover:-translate-y-1 transition-transform">↑</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;