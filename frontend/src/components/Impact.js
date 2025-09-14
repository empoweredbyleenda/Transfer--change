import React from "react";
import { Users, Heart, Gift, Calendar, MapPin, Smile } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Families Served",
      description: "Families directly supported through our programs"
    },
    {
      icon: Heart,
      number: "1,000+",
      label: "Lives Impacted",
      description: "Community members whose lives have been changed"
    },
    {
      icon: Gift,
      number: "2,500+",
      label: "Items Distributed",
      description: "Essential items provided to families in need"
    },
    {
      icon: Calendar,
      number: "Year-Round",
      label: "Continuous Support",
      description: "365 days of community assistance and care"
    },
    {
      icon: MapPin,
      number: "Los Angeles",
      label: "Community Focus",
      description: "Dedicated service to the LA metropolitan area"
    },
    {
      icon: Smile,
      number: "100%",
      label: "Hope Delivered",
      description: "Every interaction filled with compassion and dignity"
    }
  ];

  const testimonials = [
    {
      quote: "Changing Lives came through for us when we needed help the most. Their back-to-school program made sure my kids had everything they needed to start the year right.",
      author: "Maria S.",
      role: "Single Mother of 3"
    },
    {
      quote: "The community closet has been a blessing for our family. Not only did we get clothing, but we were treated with such kindness and respect.",
      author: "James T.",
      role: "Community Member"
    },
    {
      quote: "During the holidays, their turkey drive brought our family together for a meal we couldn't have afforded otherwise. It meant everything to us.",
      author: "Patricia L.",
      role: "Grandmother & Caregiver"
    }
  ];

  return (
    <section id="impact" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Every number represents a life touched, a family supported, and a community strengthened. 
            Here's the measurable impact we've made together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="card-hover bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100"
              >
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-pink-600 mb-3">{stat.label}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Stories from Our <span className="text-gradient">Community</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real people whose lives have been touched by our community programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <div className="mb-6">
                  <div className="text-4xl text-pink-300 mb-4">"</div>
                  <p className="text-gray-700 italic leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Be Part of Our Growing Impact
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Every donation, every volunteer hour, and every share helps us reach more families 
              and create lasting change in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#donate" className="btn-primary">
                Make a Donation
              </a>
              <a href="#volunteer" className="btn-secondary">
                Volunteer With Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;