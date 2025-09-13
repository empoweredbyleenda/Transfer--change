import React from "react";
import { User, Users, Heart, Home, Target, TrendingUp, Shield, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "One-on-One Coaching",
      description: "Gain clarity, set goals, and build confidence through personalized sessions tailored to your unique needs.",
      features: ["Personal goal setting", "Confidence building", "Mindset transformation", "Action planning"],
      price: "Starting at $120/session"
    },
    {
      icon: Heart,
      title: "Relationship Coaching",
      description: "Improve communication, rebuild trust, and strengthen bonds in your romantic partnerships.",
      features: ["Communication skills", "Trust rebuilding", "Conflict resolution", "Intimacy enhancement"],
      price: "Starting at $140/session"
    },
    {
      icon: Sparkles,
      title: "Youth Empowerment Coaching",
      description: "Boost confidence, reduce stress, and create positive habits for teens and young adults.",
      features: ["Confidence building", "Stress management", "Goal achievement", "Positive mindset"],
      price: "Starting at $100/session"
    },
    {
      icon: Home,
      title: "Family Communication Coaching",
      description: "Resolve conflicts and create healthier family dynamics through improved communication.",
      features: ["Family dynamics", "Conflict resolution", "Communication patterns", "Boundary setting"],
      price: "Starting at $160/session"
    },
    {
      icon: Target,
      title: "Life Coaching",
      description: "Find direction and accountability in career, business, or personal growth with structured guidance.",
      features: ["Career clarity", "Life transitions", "Goal achievement", "Personal development"],
      price: "Starting at $130/session"
    },
    {
      icon: TrendingUp,
      title: "Mood & Motivation Coaching",
      description: "Overcome feeling 'stuck' and reignite motivation to move forward with purpose and energy.",
      features: ["Motivation techniques", "Mindset shifts", "Energy alignment", "Purpose discovery"],
      price: "Starting at $120/session"
    },
    {
      icon: Shield,
      title: "Stress & Resilience Coaching",
      description: "Learn tools to stay balanced under pressure and build lasting resilience for life's challenges.",
      features: ["Stress management", "Coping strategies", "Resilience building", "Balance techniques"],
      price: "Starting at $125/session"
    },
    {
      icon: Users,
      title: "Healing & Empowerment Coaching",
      description: "Move forward after challenges and rebuild self-worth with compassionate, trauma-informed support.",
      features: ["Trauma recovery", "Self-worth rebuilding", "Empowerment tools", "Healing journey"],
      price: "Starting at $150/session"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-coaching">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive coaching services designed to meet you wherever you are in your journey. 
            Each session is tailored to your specific needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card">
                <div className="service-icon">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{service.description}</p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-semibold text-purple-600 mb-3">{service.price}</p>
                  <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Training & Workshops
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I also offer specialized training for professionals and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Child Protection Training</h4>
              <p className="text-sm text-gray-600">Professional development for educators and care providers</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Intimate Partner Violence Training</h4>
              <p className="text-sm text-gray-600">Specialized training for healthcare and social service professionals</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <h4 className="font-semibold text-gray-900 mb-2">Custom Workshops</h4>
              <p className="text-sm text-gray-600">Tailored training sessions for your organization's needs</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-lg mb-6 text-purple-100 max-w-2xl mx-auto">
              Every journey begins with a single step. Let's take that step together and create 
              the positive changes you've been seeking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                Book Free Consultation
              </a>
              <a href="#packages" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-300">
                View Packages & Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;