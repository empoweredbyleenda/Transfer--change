import React from "react";
import { Globe, Users, Heart, Award, Compass, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Globe,
      title: "Global Community",
      description: "Connecting travelers from every corner of the world, celebrating diversity and fostering cross-cultural understanding."
    },
    {
      icon: Heart,
      title: "Authentic Experiences",
      description: "We believe in genuine connections with local communities, creating meaningful relationships that enrich both travelers and hosts."
    },
    {
      icon: Shield,
      title: "Safe Adventures",
      description: "Your safety is our priority. We provide comprehensive support, local expertise, and 24/7 assistance for peace of mind."
    },
    {
      icon: Compass,
      title: "Expert Guidance",
      description: "Our experienced local guides and travel experts ensure you discover hidden gems and create unforgettable memories."
    }
  ];

  const stats = [
    { number: "1M+", label: "Global Travelers", icon: Users },
    { number: "195", label: "Countries Covered", icon: Globe },
    { number: "10K+", label: "Adventures Created", icon: Compass },
    { number: "5.0", label: "Average Rating", icon: Award }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-emerald-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-adventure">The Planet Discovery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are more than a travel company – we are a global community of explorers united by our 
            passion for discovery. Since our founding, we've connected over 1 million travelers with 
            authentic experiences across 195 countries, creating memories that last a lifetime.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center bounce-in">
                <div className="w-16 h-16 adventure-gradient rounded-full flex items-center justify-center mx-auto mb-4 earth-shadow">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Drives Us Forward
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                >
                  <div className="w-14 h-14 adventure-gradient rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="text-center">
            <div className="w-20 h-20 adventure-gradient rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              To break down barriers between cultures and create a world where every traveler becomes 
              an ambassador of understanding. We believe that through authentic travel experiences, 
              we can build bridges between communities, foster respect for our planet, and create 
              positive change that ripples across the globe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-adventure">
                Join Our Mission
              </a>
              <a href="#experiences" className="btn-outline">
                Start Your Journey
              </a>
            </div>
          </div>
        </div>

        {/* Languages & Diversity */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Speaking Your Language
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our global team speaks your language – literally. From Arabic to Igbo, from Hebrew to Tunsi, 
            we ensure every traveler feels welcomed and understood, no matter where they call home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { flag: "🇺🇸", name: "English" },
              { flag: "🇩🇿", name: "العربية" },
              { flag: "🇹🇳", name: "Tunsi" },
              { flag: "🇳🇬", name: "Igbo" },
              { flag: "🇮🇱", name: "עברית" },
              { flag: "🇫🇷", name: "Français" },
              { flag: "🇪🇸", name: "Español" }
            ].map((lang, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl">{lang.flag}</span>
                <span className="font-medium text-gray-700">{lang.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;