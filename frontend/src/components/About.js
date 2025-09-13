import React from "react";
import { Heart, Users, Target, Award, CheckCircle, Star } from "lucide-react";

const About = () => {
  const credentials = [
    "Certified NLP Practitioner",
    "Life & Empowerment Coach",
    "CBT Principles Training",
    "Youth Empowerment Specialist",
    "Family Communication Expert",
    "Trauma-Informed Approach"
  ];

  const specializations = [
    {
      icon: Heart,
      title: "Healing & Empowerment",
      description: "Support after life challenges, focusing on confidence, self-worth, and regaining power."
    },
    {
      icon: Users,
      title: "Relationship Coaching",
      description: "Improve communication, rebuild trust, and create stronger, healthier partnerships."
    },
    {
      icon: Target,
      title: "Life Direction",
      description: "Gain clarity and accountability in career, business, or personal growth journey."
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Professional Photo */}
          <div className="relative">
            <div className="slide-in-left">
              <div className="relative rounded-2xl overflow-hidden professional-shadow">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Leenda Bolden - Professional Coach"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Leenda Bolden</h3>
                    <p className="text-lg text-gray-200">Certified NLP & Life Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="slide-in-right">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-coaching">Leenda B</span>
            </h2>
            
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="text-xl leading-relaxed mb-6">
                A Certified Life & NLP Practitioner dedicated to helping individuals, couples, youth, 
                and families build resilience, confidence, and stronger connections.
              </p>
              
              <p className="leading-relaxed mb-6">
                Through personalized coaching, I provide tools for growth, healing, and empowerment — 
                without judgment, just support. My approach combines evidence-based techniques with 
                compassionate guidance to help you create lasting positive change.
              </p>

              <p className="leading-relaxed">
                <strong>My mission:</strong> "Changing Lives one person at a time — through the power 
                of mindset, communication, and personal growth."
              </p>
            </div>

            {/* Credentials */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications & Training</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#services" className="btn-primary">
                View My Services
              </a>
              <a href="#contact" className="btn-secondary">
                Schedule Free Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              My <span className="text-coaching">Specializations</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I bring expertise in multiple areas to provide comprehensive support for your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div key={index} className="service-card text-center">
                  <div className="service-icon mx-auto">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{spec.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{spec.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Me */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Coaching with Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Compassionate</h4>
                <p className="text-sm text-gray-600">Supportive & confidential sessions</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Certified</h4>
                <p className="text-sm text-gray-600">NLP, Life Coaching & CBT trained</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Flexible</h4>
                <p className="text-sm text-gray-600">In-person (LA) or virtual worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Affordable</h4>
                <p className="text-sm text-gray-600">Session packages for real progress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;