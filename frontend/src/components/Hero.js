import React from "react";
import { ArrowRight, Users, Heart, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/wk84hkl3_IMG_0996_Original.png"
          alt="Snatched Beauties - Changing Lives One Family at a Time"
          className="w-full h-full object-contain bg-gray-50"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            More Than Aid —{" "}
            <span className="text-gradient">
              We Change Lives
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-200">
            Empowering underserved youth, families, and individuals nationwide with LA County as our home base, 
            because we believe every life deserves the opportunity to flourish and reach its full potential.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center slide-in-left">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-gray-300">Families Served</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1000+</h3>
              <p className="text-gray-300">Lives Impacted</p>
            </div>
            
            <div className="text-center slide-in-right">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Year-Round</h3>
              <p className="text-gray-300">Community Support</p>
            </div>
          </div>

          {/* Buttons moved below stats, away from logo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#donate" className="btn-primary">
              Donate Now
            </a>
            <a href="#programs" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;