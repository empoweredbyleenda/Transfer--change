import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Filter } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Mountain Adventure in Nepal",
      category: "Mountains",
      location: "Nepal",
      year: "2023"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Tropical Paradise Maldives",
      category: "Ocean",
      location: "Maldives",
      year: "2023"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1539650116574-75c0c6d73313?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Cultural Festival Peru",
      category: "Culture",
      location: "Peru",
      year: "2023"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Amazon Rainforest",
      category: "Forest",
      location: "Brazil",
      year: "2023"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "London City Exploration",
      category: "City",
      location: "UK",
      year: "2022"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Iceland Photography Tour",
      category: "Photography",
      location: "Iceland",
      year: "2023"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Lake Adventure",
      category: "Mountains",
      location: "Switzerland",
      year: "2023"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Coral Reef Diving",
      category: "Ocean",
      location: "Australia",
      year: "2022"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Moroccan Markets",
      category: "Culture",
      location: "Morocco",
      year: "2023"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1419833479618-c595710936ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Forest Wildlife Safari",
      category: "Forest",
      location: "Kenya",
      year: "2023"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Tokyo Street Life",
      category: "City",
      location: "Japan",
      year: "2022"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      alt: "Northern Lights Photography",
      category: "Photography",
      location: "Norway",
      year: "2023"
    }
  ];

  const categories = ["All", "Mountains", "Ocean", "Culture", "Forest", "City", "Photography"];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Adventure <span className="text-adventure">Gallery</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Witness the incredible journeys of our global community. From breathtaking landscapes 
            to cultural encounters, every photo tells a story of discovery.
          </p>
          
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center space-x-2 text-gray-500 mb-4">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by experience:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-emerald-500 to-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item aspect-square cursor-pointer"
              onClick={() => openModal(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="gallery-overlay">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">{image.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{image.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Adventure Story?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of explorers and capture memories that will last a lifetime. 
              Your next great adventure is just one click away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-adventure">
                Plan Your Journey
              </a>
              <a href="#experiences" className="btn-outline">
                Browse Experiences
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">{selectedImage.alt}</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{selectedImage.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{selectedImage.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;