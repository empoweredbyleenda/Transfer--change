import React from "react";
import { BookOpen, ShoppingBag, Gift, Home, Heart, Users } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Back-to-School Drives",
      description: "Providing essential school supplies, backpacks, and educational materials to ensure every child has the tools they need to succeed in their educational journey.",
      image: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/k5ncgcv6_IMG_1286.jpeg",
      features: ["School Supplies", "Backpacks", "Educational Materials", "Academic Support"]
    },
    {
      icon: ShoppingBag,
      title: "Community Closet",
      description: "A beacon of hope offering clothing and necessities to families in need, ensuring everyone has access to basic essentials with dignity and respect.",
      image: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/v600xabl_IMG_6867.jpeg",
      features: ["Clothing Distribution", "Basic Necessities", "Family Support", "Dignity & Respect"]
    },
    {
      icon: Gift,
      title: "Holiday Programs",
      description: "Turkey Drives and Christmas Giveaways that bring joy and essential resources to families during the holiday seasons, creating lasting memories.",
      image: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/4t9qxvac_IMG_1355.jpeg",
      features: ["Turkey Drives", "Christmas Giveaways", "Holiday Joy", "Family Celebrations"]
    },
    {
      icon: Home,
      title: "Emergency Relief",
      description: "Rapid response support for families impacted by disasters, providing financial aid, emotional counseling, and essential supplies during their time of greatest need.",
      image: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/3h1ox29h_IMG_8501.jpeg",
      features: ["Disaster Response", "Financial Aid", "Emotional Support", "Essential Supplies"]
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health resources and wellness programs including mask distribution and health supplies that support community well-being and safety.",
      image: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/x7uj2son_IMG_4768.jpeg",
      features: ["Health Supplies", "Wellness Programs", "Safety Equipment", "Community Health"]
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Building powerful partnerships with corporations, fire departments, and community organizations to maximize our impact and reach more families in need.",
      image: "https://customer-assets.emergentagent.com/job_beauty-impact-1/artifacts/i31wg596_IMG_0455.jpeg",
      features: ["Corporate Partners", "Emergency Services", "Volunteer Groups", "Community Collaboration"]
    }
  ];

  return (
    <section id="programs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support services designed to meet the diverse needs of our Los Angeles community, 
            from emergency relief to long-term empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="card-hover bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                    style={program.title === "Youth Empowerment" ? { objectPosition: '50% 30%' } : {}}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                  
                  <div className="space-y-2">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Program Impact Statement */}
        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Year-Round Community Support
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our initiatives ensure that families receive the support they need throughout the year. 
              By uplifting others, we strive to create a stronger, more resilient community and a brighter future for all. 
              Each program is designed to address immediate needs while building long-term stability and hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;