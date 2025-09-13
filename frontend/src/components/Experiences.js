import React from "react";
import { Mountain, Waves, TreePine, Building2, Heart, Camera } from "lucide-react";

const Experiences = () => {
  const experiences = [
    {
      icon: Mountain,
      title: "Adventure & Hiking",
      description: "Scale magnificent peaks, explore hidden trails, and witness breathtaking mountain vistas that will challenge and inspire you.",
      image: "https://images.unsplash.com/photo-1551524164-687a55dd1126?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: ["Nepal", "Patagonia", "Swiss Alps", "Rocky Mountains"],
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Waves,
      title: "Ocean & Islands",
      description: "Dive into crystal-clear waters, discover vibrant coral reefs, and relax on pristine beaches in paradise destinations.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: ["Maldives", "Seychelles", "Bora Bora", "Great Barrier Reef"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: TreePine,
      title: "Forest & Wildlife",
      description: "Immerse yourself in lush rainforests, encounter exotic wildlife, and connect with nature's most pristine environments.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: ["Amazon", "Borneo", "Madagascar", "Costa Rica"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "Cities & Culture",
      description: "Explore vibrant cities, discover ancient cultures, taste authentic cuisine, and create memories in urban adventures.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: ["Tokyo", "Marrakech", "Istanbul", "Barcelona"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Live with local families, learn traditional crafts, participate in festivals, and experience authentic ways of life.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73313?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: ["Peru", "India", "Morocco", "Tibet"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description: "Capture stunning landscapes, document unique cultures, and improve your photography skills with expert guides.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: ["Iceland", "Kenya", "New Zealand", "Norway"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section id="experiences" className="section-padding bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-adventure">Adventure</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From mountain peaks to ocean depths, from ancient cultures to modern cities. 
            Discover the world through experiences that match your passion for adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <div
                key={index}
                className="experience-card group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`experience-overlay absolute inset-0 bg-gradient-to-t ${experience.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
                    <div className="text-center text-white p-6">
                      <Icon className="w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
                      <p className="text-sm opacity-90">Click to explore destinations</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-semibold text-gray-700">Popular Destinations:</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.destinations.map((destination, destIndex) => (
                        <span
                          key={destIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors cursor-pointer"
                        >
                          {destination}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="btn-earth w-full">
                    Explore {experience.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Can't Find Your Perfect Adventure?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our travel experts can create a completely customized experience just for you. 
              Tell us your dreams, and we'll make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-adventure">
                Create Custom Experience
              </a>
              <a href="#gallery" className="btn-outline">
                View Past Adventures
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;