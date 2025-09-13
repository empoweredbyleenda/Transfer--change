import React from "react";
import { ArrowRight, MapPin, Users, Camera, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
          alt="Adventure Travel"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in">
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-orange-400 to-blue-400">
              Planet
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-gray-100">
            Join over 1 million adventurers from around the world. Experience authentic cultures, 
            breathtaking landscapes, and life-changing moments that will stay with you forever.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#experiences" className="btn-adventure group">
              Explore Experiences
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#gallery" className="btn-outline">
              View Gallery
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center slide-in-left">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">1M+</h3>
              <p className="text-gray-300 text-sm">Global Community</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100+</h3>
              <p className="text-gray-300 text-sm">Destinations</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10K+</h3>
              <p className="text-gray-300 text-sm">Adventures Shared</p>
            </div>
            
            <div className="text-center slide-in-right">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">5.0</h3>
              <p className="text-gray-300 text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;