import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Using UNIQUE photos that are NOT used in Programs section
  const galleryImages = [
    {
      id: 1,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/m7syjxil_IMG_0414.jpeg",
      alt: "Professional volunteer at community event",
      category: "Team & Volunteers",
      description: "Dedicated team member at a Changing Lives community outreach event"
    },
    {
      id: 2,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/kafbm3va_IMG_0310.jpeg",
      alt: "Corporate sponsors and community partners",
      category: "Partnerships",
      description: "Proud partnerships with Eisner Health, Cane's, TopGolf, Thrive Market, and many other supporters"
    },
    {
      id: 4,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/o9ihmsce_IMG_4115.jpeg",
      alt: "Pray for Los Angeles - Emergency Response",
      category: "Emergency Relief",
      description: "Supporting our Los Angeles community during times of crisis and natural disasters"
    },
    {
      id: 5,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/pacf2mi3_IMG_3976.jpeg",
      alt: "#LAFires - Emergency Response Context",
      category: "Emergency Relief",
      description: "The devastating LA fires that prompted our emergency response efforts to help affected families"
    },
    {
      id: 6,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/mwcamhwu_IMG_4040.jpeg",
      alt: "Fire aftermath and destruction",
      category: "Emergency Relief",
      description: "The devastating aftermath of LA fires showing why our emergency relief programs are so critical"
    },
    {
      id: 6,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/s7610mdy_IMG_6517.jpeg",
      alt: "Fire Department collaboration with food donations",
      category: "Emergency Relief",
      description: "Working alongside LA Fire Department heroes to provide food and essential supplies during emergencies"
    },
    {
      id: 7,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/tz1zgq08_IMG_1315.jpeg",
      alt: "Volunteers distributing supplies",
      category: "Community Outreach",
      description: "Our dedicated volunteers helping families during a community distribution event"
    },
    {
      id: 8,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/9f7vzw7l_IMG_1289.jpeg",
      alt: "Educational resource distribution",
      category: "Educational Support",
      description: "Volunteers in Changing Lives shirts providing educational resources and materials"
    },
    {
      id: 9,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/obhcy0uw_IMG_6877.png",
      alt: "Community distribution tent event",
      category: "Community Outreach",
      description: "Large-scale community distribution event with volunteers distributing essential items"
    },
    {
      id: 11,
      src: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/zslphu76_IMG_1288.jpeg",
      alt: "Happy child with school supplies",
      category: "Youth Impact",
      description: "A bright smile shows the joy of receiving educational support and encouragement"
    }
  ];

  const categories = ["All", ...new Set(galleryImages.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Community in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            See the real impact of our work through authentic photos from our community events, 
            programs, and the lives we've touched together.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer card-hover bg-gray-100 gallery-watermarked"
              onClick={() => openModal(image, index)}
            >
              <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    objectFit: 'contain',
                    backgroundColor: '#f9fafb'
                  }}
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-2">
                    <Camera className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{image.category}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of Our Story
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Every photo represents a life touched, a family supported, and a community strengthened. 
              Join us in creating more moments like these.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#help" className="btn-primary">
                Get Involved
              </a>
              <a href="#contact" className="btn-secondary">
                Learn More
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
                <div className="flex items-center mb-2">
                  <Camera className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">{selectedImage.category}</span>
                </div>
                <p className="text-sm leading-relaxed">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;