import React from "react";
import { Heart, Award, Users, Target } from "lucide-react";

const Founder = () => {
  const achievements = [
    {
      icon: Heart,
      title: "Community Impact",
      description: "Leading initiatives that restore hope and stability"
    },
    {
      icon: Users,
      title: "Youth Empowerment",
      description: "Creating opportunities for the next generation"
    },
    {
      icon: Award,
      title: "Mental Health Advocacy",
      description: "Providing essential counseling and therapy resources"
    },
    {
      icon: Target,
      title: "Disaster Relief",
      description: "Rapid response support for families in crisis"
    }
  ];

  return (
    <section id="founder" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-gradient">Founder</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The heart and vision behind Changing Lives
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl bg-gray-100">
                <img 
                  src="/leenda-founder.jpeg" 
                  alt="Leenda B, Founder of Changing Lives" 
                  className="w-full h-full object-cover"
                  style={{objectPosition: '50% 25%'}}
                  onError={(e) => {
                    // Fallback if photo doesn't load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-600 font-medium">Leenda B</p>
                    <p className="text-sm text-gray-500">Founder</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-300 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-200 rounded-full"></div>
            </div>
          </div>

          {/* Founder Bio */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Leenda B</h3>
              <p className="text-xl text-pink-300 font-semibold mb-6">Founder</p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Leenda is the founder of Changing Lives, a nonprofit dedicated to uplifting families 
                and communities through natural disaster relief, youth empowerment, mental health resources, 
                coaching therapy, and essential resources.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                With a heart for service and a vision for lasting impact, she leads initiatives that 
                restore hope, provide stability, and create opportunities for a brighter future.
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-pink-300 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{achievement.title}</h4>
                      <p className="text-xs text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Leenda's Mission
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of the movement to create lasting change in communities nationwide. 
              Together, we can restore hope and build brighter futures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#help" className="btn-primary">
                Get Involved
              </a>
              <a href="#programs" className="btn-secondary">
                Learn About Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;