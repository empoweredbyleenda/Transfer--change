import React from "react";
import { ArrowRight, MapPin, Video, Star, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center coaching-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="fade-in">
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Find Clarity, Confidence &{" "}
                <span className="text-coaching">Healing</span>{" "}
                Through Coaching
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Serving Los Angeles (In-Person) & Nationwide (Zoom)
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a href="#contact" className="btn-primary group">
                  Book Your First Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#about" className="btn-secondary">
                  Learn More About Me
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="trust-badge">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Certified NLP Practitioner</span>
                </div>
                <div className="trust-badge">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">LA In-Person</span>
                </div>
                <div className="trust-badge">
                  <Video className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium text-gray-700">Zoom Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image */}
          <div className="relative">
            <div className="slide-in-right">
              <div className="relative rounded-2xl overflow-hidden professional-shadow">
                <img
                  src="https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/i0er0vi4_IMG_2014.jpeg"
                  alt="Leenda Bolden - Professional Coach"
                  className="w-full h-[500px] object-cover"
                />
                <div className="hero-overlay absolute inset-0"></div>
              </div>
              
              {/* Floating testimonial card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  "Leenda helped me find my confidence and clarity. Highly recommend!"
                </p>
                <p className="text-xs text-gray-500 font-medium">- Sarah M.</p>
              </div>

              {/* Professional credentials badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="font-bold text-lg">NLP</div>
                  <div className="text-sm opacity-90">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Availability Banner */}
        <div className="mt-16 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-lg font-semibold text-gray-900">Ready to start your transformation?</p>
              <p className="text-gray-600">Book your first session and take the first step toward positive change.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center space-x-2 text-green-600">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Available Today</span>
              </div>
              <a href="tel:323-613-5153" className="btn-accent">
                Call (323) 613-5153
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;