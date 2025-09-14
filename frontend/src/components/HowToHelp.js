import React, { useState } from "react";
import { Heart, HandHeart, Share2, DollarSign, Clock, Users, Mail, Gift } from "lucide-react";

const HowToHelp = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [volunteerEmail, setVolunteerEmail] = useState("");
  const [donorEmail, setDonorEmail] = useState("");

  const ways = [
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Your financial support helps us purchase essential supplies, fund programs, and reach more families in need.",
      action: "Donate Now"
    },
    {
      icon: Clock,
      title: "Volunteer Your Time",
      description: "Join our team of dedicated volunteers for distribution events, community outreach, and program support.",
      action: "Sign Up"
    },
    {
      icon: Share2,
      title: "Spread the Word",
      description: "Share our mission on social media, tell friends and family, and help us reach more people who need support.",
      action: "Share Now"
    }
  ];

  const donationAmounts = [25, 50, 100, 250, 500];

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in volunteering! We'll contact you at ${volunteerEmail}`);
    setVolunteerEmail("");
  };

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your ${donationAmount} donation! Redirecting to secure payment...`);
  };

  return (
    <section id="help" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How You Can <span className="text-blue-600">Help</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your support can change lives. Whether through donations, volunteering, or raising awareness, 
            every contribution makes a meaningful difference in our community.
          </p>
        </div>

        {/* Ways to Help */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="card-hover bg-gray-50 rounded-xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{way.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{way.description}</p>
                {way.title === "Make a Donation" && (
                  <a href="#donate" className="btn-primary w-full block text-center">
                    {way.action}
                  </a>
                )}
                {way.title === "Volunteer Your Time" && (
                  <a href="#volunteer" className="btn-primary w-full block text-center">
                    {way.action}
                  </a>
                )}
                {way.title === "Spread the Word" && (
                  <a href="#contact" className="btn-primary w-full block text-center">
                    {way.action}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div id="donate" className="bg-blue-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Make a Donation</h3>
              <p className="text-gray-600">Every dollar goes directly to supporting families in need</p>
            </div>

            <form onSubmit={handleDonationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount)}
                      className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                        donationAmount === amount
                          ? "border-purple-600 bg-purple-600 text-white"
                          : "border-gray-300 text-gray-700 hover:border-purple-300"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(parseInt(e.target.value) || 0)}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                    placeholder="Custom amount"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Donate ${donationAmount}
              </button>

              <p className="text-xs text-gray-500 text-center">
                Secure payment powered by PayPal. Your donation is tax-deductible.
              </p>
            </form>
          </div>

          {/* Volunteer Form */}
          <div id="volunteer" className="bg-blue-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <HandHeart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Volunteer With Us</h3>
              <p className="text-gray-600">Join our team and make a direct impact in your community</p>
            </div>

            <form onSubmit={handleVolunteerSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={volunteerEmail}
                  onChange={(e) => setVolunteerEmail(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Areas of Interest
                </label>
                <div className="space-y-2">
                  {[
                    "Distribution Events",
                    "Back-to-School Drives",
                    "Holiday Programs",
                    "Community Outreach",
                    "Administrative Support"
                  ].map((area) => (
                    <label key={area} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{area}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 w-full">
                Sign Up to Volunteer
              </button>

              <p className="text-xs text-gray-500 text-center">
                We'll contact you with upcoming volunteer opportunities.
              </p>
            </form>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Other Ways to Support</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Corporate Partnerships</h4>
              <p className="text-sm text-gray-600">Partner with us for employee volunteer programs</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">In-Kind Donations</h4>
              <p className="text-sm text-gray-600">Donate supplies, clothing, or services</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Share2 className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Social Media</h4>
              <p className="text-sm text-gray-600">Follow and share our posts to spread awareness</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-4" />
              <h4 className="font-semibold text-gray-900 mb-2">Newsletter</h4>
              <p className="text-sm text-gray-600">Stay updated on our programs and impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;