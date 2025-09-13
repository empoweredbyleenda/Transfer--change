import React from "react";
import { Check, Star, ArrowRight, Gift, Target, Zap } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      name: "Single Session",
      price: "$100-180",
      period: "per session",
      description: "Perfect for trying coaching or addressing a specific challenge",
      features: [
        "50-minute focused session",
        "Personalized action plan",
        "Follow-up resources",
        "Email support for 1 week"
      ],
      icon: Target,
      popular: false,
      cta: "Book Single Session"
    },
    {
      name: "6-Session Growth Package",
      price: "$540-970",
      period: "6 sessions",
      originalPrice: "$600-1080",
      description: "Build consistency & real change with sustained support",
      features: [
        "6 x 50-minute sessions",
        "Customized growth plan",
        "Progress tracking tools",
        "Weekly check-in emails",
        "Priority booking",
        "10% savings vs single sessions"
      ],
      icon: Gift,
      popular: true,
      cta: "Start Growth Package",
      badge: "Most Popular"
    },
    {
      name: "12-Session Transformation",
      price: "$1020-1836",
      period: "12 sessions",
      originalPrice: "$1200-2160",
      description: "Long-term support & deep transformation with maximum results",
      features: [
        "12 x 50-minute sessions",
        "Comprehensive transformation plan",
        "Bi-weekly progress reviews",
        "Unlimited email support",
        "Priority scheduling",
        "Resource library access",
        "15% savings vs single sessions"
      ],
      icon: Zap,
      popular: false,
      cta: "Begin Transformation",
      badge: "Best Value"
    }
  ];

  const sessionTypes = [
    { name: "Youth Empowerment", price: "$100" },
    { name: "Individual Coaching", price: "$120-130" },
    { name: "Relationship Coaching", price: "$140" },
    { name: "Healing & Empowerment", price: "$150" },
    { name: "Family Communication", price: "$160" },
    { name: "Specialized Training", price: "$180" }
  ];

  return (
    <section id="packages" className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Packages & <span className="text-coaching">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Affordable session packages designed for real progress. Choose the option 
            that fits your goals and budget.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block shadow-md">
            <p className="text-sm text-gray-600">
              💡 <strong>Save more with packages:</strong> 6 sessions save 10% • 12 sessions save 15%
            </p>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`pricing-card ${pkg.popular ? 'pricing-featured' : 'border-gray-200'}`}
              >
                {pkg.badge && (
                  <div className="pricing-badge">
                    {pkg.badge}
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-purple-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-2">{pkg.period}</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-sm text-gray-500">
                      <span className="line-through">{pkg.originalPrice}</span>
                      <span className="text-green-600 font-semibold ml-2">
                        Save {pkg.name.includes('6') ? '10%' : '15%'}!
                      </span>
                    </div>
                  )}
                  <p className="text-gray-600 mt-4">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 ${
                  pkg.popular 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white shadow-lg transform hover:scale-105'
                    : 'bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
                }`}>
                  {pkg.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Session Type Pricing */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Individual Session Pricing
            </h3>
            <p className="text-gray-600">
              All sessions are 50 minutes. Pricing varies by service type and complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sessionTypes.map((type, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{type.name}</span>
                <span className="text-purple-600 font-bold">{type.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment & Booking Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Payment Options</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Credit/Debit Cards</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">PayPal & Venmo</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Payment plans available</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Secure, encrypted processing</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Booking Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Free 15-minute consultation</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">Flexible scheduling</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">24-hour cancellation policy</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-gray-700">In-person (LA) or virtual options</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Invest in Yourself?
            </h3>
            <p className="text-xl mb-6 text-purple-100 max-w-2xl mx-auto">
              Your transformation starts with a single step. Book your free consultation 
              and let's discuss which package is right for your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 flex items-center justify-center"
              >
                Book Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:323-613-5153" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Call (323) 613-5153
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;