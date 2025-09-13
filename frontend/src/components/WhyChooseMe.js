import React from "react";
import { Shield, Heart, Users, Award, Clock, MapPin, Video, Star } from "lucide-react";

const WhyChooseMe = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Compassionate & Supportive",
      description: "Every session is judgment-free, confidential, and designed to create a safe space for your growth and healing."
    },
    {
      icon: Award,
      title: "Certified & Trained",
      description: "Certified in NLP, Life Coaching, CBT principles, and empowerment training with ongoing professional development."
    },
    {
      icon: Users,
      title: "Flexible Options",
      description: "Choose in-person sessions in Los Angeles or convenient virtual sessions via Zoom from anywhere in the world."
    },
    {
      icon: Star,
      title: "Affordable Packages",
      description: "Session packages designed for real progress with savings that make transformation accessible."
    }
  ];

  const approaches = [
    {
      title: "Trauma-Informed Care",
      description: "Understanding how past experiences shape current challenges, with gentle, respectful approaches."
    },
    {
      title: "Solution-Focused",
      description: "While we honor your past, we focus on building the future you want to create."
    },
    {
      title: "Culturally Sensitive",
      description: "Respecting diverse backgrounds and incorporating your cultural values into the coaching process."
    },
    {
      title: "Evidence-Based",
      description: "Using proven techniques from NLP, CBT, and positive psychology for lasting change."
    }
  ];

  const testimonials = [
    {
      quote: "Leenda helped me rebuild my confidence after a difficult period. Her approach is so compassionate and effective.",
      author: "Maria S.",
      rating: 5
    },
    {
      quote: "The relationship coaching saved my marriage. We learned to communicate in ways we never thought possible.",
      author: "James & Lisa T.",
      rating: 5
    },
    {
      quote: "My teenager was struggling, but after working with Leenda, their confidence and grades improved dramatically.",
      author: "Patricia L.",
      rating: 5
    }
  ];

  return (
    <section id="why-choose-me" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-coaching">Coaching with Me?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your transformation matters. Here's what makes my approach different and effective.
          </p>
        </div>

        {/* Main Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service Options */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Flexible Ways to Work Together
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
                <h4 className="text-xl font-semibold text-gray-900">In-Person Sessions</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Face-to-face coaching in Los Angeles for those who prefer personal connection 
                and a dedicated space for transformation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Available weekdays and weekends</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Private, comfortable setting</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Video className="w-6 h-6 text-purple-600" />
                <h4 className="text-xl font-semibold text-gray-900">Virtual Sessions</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Zoom coaching sessions available worldwide, bringing professional support 
                to the comfort of your own space.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Flexible scheduling across time zones</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Secure, HIPAA-compliant platform</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Approach */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              My <span className="text-coaching">Approach</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every person is unique, and so is my approach to helping you achieve your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{approach.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What My <span className="text-coaching">Clients Say</span>
            </h3>
            <p className="text-xl text-gray-600">
              Real transformations from real people who took the step to invest in themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                <div className="testimonial-quote">"</div>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  {testimonial.quote}
                </p>
                <p className="text-sm font-semibold text-gray-900">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;