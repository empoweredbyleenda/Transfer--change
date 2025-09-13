import React, { useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Experiences", href: "#experiences" },
    { name: "Gallery", href: "#gallery" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇩🇿" },
    { code: "tn", name: "Tunsi", flag: "🇹🇳" },
    { code: "ig", name: "Igbo", flag: "🇳🇬" },
    { code: "he", name: "עברית", flag: "🇮🇱" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const getCurrentLanguageName = () => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang ? lang.name : "English";
  };

  const getCurrentFlag = () => {
    const lang = languages.find(l => l.code === currentLanguage);
    return lang ? lang.flag : "🇺🇸";
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 adventure-gradient rounded-full flex items-center justify-center">
              <Globe className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">The Planet</h1>
              <p className="text-sm text-adventure font-semibold">Discovery</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="language-selector">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors duration-200"
              >
                <span className="text-lg">{getCurrentFlag()}</span>
                <span className="text-sm font-medium text-gray-700">{getCurrentLanguageName()}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLanguageOpen && (
                <div className="language-dropdown">
                  {languages.map((lang) => (
                    <div
                      key={lang.code}
                      className="language-item"
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setIsLanguageOpen(false);
                      }}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="btn-adventure">
              Start Your Journey
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs ${
                        currentLanguage === lang.code 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-gray-100 text-gray-600 hover:bg-emerald-50'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="btn-adventure block text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Your Journey
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;