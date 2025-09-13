import React from "react";
import { Target, Shield, Users, Lightbulb } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide compassionate support, essential resources, and life-changing opportunities to individuals and families in need throughout Los Angeles."
    },
    {
      icon: Shield,
      title: "Emergency Relief",
      description: "Rapid response support for families impacted by disasters, providing essential supplies, financial aid, and emotional counseling when they need it most."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Building stronger communities through year-round programs including our Community Closet, Back-to-School Drives, and holiday giveaways."
    },
    {
      icon: Lightbulb,
      title: "Lasting Impact",
      description: "Creating sustainable change through mental health resources, youth empowerment, and community outreach that builds resilience and hope."
    }
  ];

  return (
    <section id="mission" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Changing Lives is built on the belief that everyone deserves a chance to thrive. 
            We are committed to making a lasting impact nationwide, with LA County as our home base.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="card-hover bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Together, We Build a Brighter Future
            </h3>
            <p className="text-lg mb-6 text-pink-100">
              Every contribution matters. Join us in building resilience and nurturing hope 
              in those who need it most.
            </p>
            <a href="#help" className="btn-secondary bg-white text-purple-600 hover:bg-gray-100">
              Get Involved Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;