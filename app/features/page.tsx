"use client";

import Header from "../components/Header";
import Image from "next/image";

export default function FeaturesPage() {
  const features = [
    {
      title: "Area-Based Onboarding",
      description: "Community-specific user onboarding flow. One user, one community—ensuring all listings, forums, and insights are hyper-local to your neighborhood.",
      details: [
        "Sign-up form requiring name, email, password, and phone number",
        "Mandatory selection of a single community during onboarding",
        "Restriction: Users cannot join more than one community at a time",
        "Option to change community (limited frequency, admin approval required)",
        "Secure account verification via email or mobile phone (OTP)"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "blue"
    },
    {
      title: "Neighborhood Pages",
      description: "Comprehensive profiles for each area with local data, amenities, safety ratings, transportation links, and all listings in your community.",
      details: [
        "Search, tag, or auto-detect neighborhoods during listing or onboarding",
        "Amenities: schools, hospitals, shops, etc.",
        "Safety ratings and walkability scores",
        "Transportation links: bus stops, BRT routes, etc.",
        "Points of interest: hangout spots, religious centers, parks",
        "Community ranking or reputation scoring based on user activity"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "purple"
    },
    {
      title: "Verified Listings",
      description: "All agents and landlords must be verified before listing. Email/SMS OTP and KYC verification ensure trusted properties and reduce fraud.",
      details: [
        "Identity Verification System: Email/SMS OTP & KYC for agents/landlords",
        "Mandatory verification before publishing listings",
        "Verified badges clearly displayed on profiles and listings",
        "Document management for verification status",
        "Reduced fraud and increased trust in the platform"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Direct Messaging",
      description: "End-to-end encrypted chat system. Safely communicate with agents, landlords, and neighbors directly through the platform.",
      details: [
        "Secure, in-app messaging system",
        "End-to-end encrypted chat for privacy",
        "Direct communication with agents and landlords",
        "Message status tracking (sent, delivered, read)",
        "Safe and secure communication channels"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "orange"
    },
    {
      title: "Forums & Reviews",
      description: "Engage in community forums, post local feedback, share neighborhood insights, and read authentic reviews from residents.",
      details: [
        "Community forums for neighborhood discussions",
        "Post and read local feedback",
        "Share neighborhood insights and recommendations",
        "Authentic reviews from current residents",
        "Moderation tools for safe community engagement"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      color: "pink"
    },
    {
      title: "Subscriptions & Payments",
      description: "Premium tiers for agents, featured listings, and rental bookings. Secure payment processing via Paystack and Flutterwave with multiple payment methods.",
      details: [
        "Premium tiers for agents and featured listings",
        "Secure integration with Paystack and Flutterwave",
        "Multiple payment methods: debit/credit cards, bank transfer, USSD, mobile wallets",
        "Real-time transaction processing and notifications",
        "Fraud prevention measures and secure data storage",
        "Receipt generation upon successful payments"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "indigo"
    },
    {
      title: "Local Business Directory",
      description: "Discover trusted artisans, shops, and services in your neighborhood, all rated and reviewed by your community members.",
      details: [
        "Directory of rated area artisans and local businesses",
        "Community-rated services and shops",
        "Service provider profiles with ratings and reviews",
        "Easy discovery of local services in your neighborhood",
        "Support for local businesses and community economy"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      color: "yellow"
    },
    {
      title: "Event Calendar",
      description: "Browse and list community activities, neighborhood gatherings, and local events. Never miss out on what's happening in your area.",
      details: [
        "Browse community activities and events",
        "List your own neighborhood gatherings",
        "Event calendar with dates and details",
        "Stay connected with local happenings",
        "From block parties to farmers markets"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      color: "teal"
    },
    {
      title: "Mobile-First Experience",
      description: "Fully responsive mobile app and website. Access all features on-the-go with an intuitive, accessible interface designed for everyone.",
      details: [
        "Fully responsive mobile app and website",
        "Mobile-first UI design",
        "Accessible for users with disabilities",
        "Intuitive interface with clear instructions",
        "Access all features on-the-go"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-200" },
      green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-200" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-200" },
      pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-200" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", border: "border-indigo-200" },
      yellow: { bg: "bg-yellow-100", text: "text-yellow-600", border: "border-yellow-200" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", border: "border-teal-200" },
      cyan: { bg: "bg-cyan-100", text: "text-cyan-600", border: "border-cyan-200" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="w-full rounded-[32px] pb-8 md:pb-12 pt-0 px-8 md:px-12 overflow-hidden" style={{ backgroundColor: '#00419c' }}>
            <div className="grid md:grid-cols-2 gap-8 items-end">
              {/* Left Column - Image */}
              <div className="flex justify-center items-end">
                <div className="relative w-full max-w-md mx-auto">
                  <Image
                    src="/images/features.png"
                    alt="Platform Features"
                    width={400}
                    height={600}
                    className="w-full h-auto rounded-2xl object-contain"
                    quality={100}
                  />
                </div>
              </div>
              
              {/* Right Column - Text Content */}
              <div className="text-center md:text-left mx-auto mt-0 pt-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white mt-0 pt-0">
                  We are not just a platform
                </h1>
                <p className="text-xl text-white/90">
                  Everything you need to find your perfect home and connect with your community, all in one place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const colors = getColorClasses(feature.color);
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-sm transition-all duration-300 border border-gray-100"
                    style={{
                      borderColor: 'rgb(229, 231, 235)'
                    }}
                    onMouseEnter={(e) => {
                      const borderColors: { [key: string]: string } = {
                        blue: 'rgb(59, 130, 246)',
                        purple: 'rgb(147, 51, 234)',
                        green: 'rgb(34, 197, 94)',
                        orange: 'rgb(249, 115, 22)',
                        pink: 'rgb(236, 72, 153)',
                        indigo: 'rgb(99, 102, 241)',
                        yellow: 'rgb(234, 179, 8)',
                        teal: 'rgb(20, 184, 166)',
                        cyan: 'rgb(6, 182, 212)'
                      };
                      e.currentTarget.style.borderColor = borderColors[feature.color] || borderColors.blue;
                      e.currentTarget.style.borderWidth = '2px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(229, 231, 235)';
                      e.currentTarget.style.borderWidth = '1px';
                    }}
                  >
                    <div className={`w-16 h-16 ${colors.bg} rounded-lg flex items-center justify-center mb-6 ${colors.text}`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="border-t border-gray-100 pt-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {feature.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <svg className={`w-5 h-5 ${colors.text} mr-2 mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="w-full rounded-2xl p-12 text-center text-white" style={{ backgroundColor: '#00419c' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience These Features?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join CribEasy today and discover how our platform can help you find your perfect home and connect with your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105 rounded-2xl overflow-hidden"
                aria-label="Download on App Store"
              >
                <Image
                  src="/images/gp.svg"
                  alt="Download on App Store"
                  width={218}
                  height={78}
                  className="h-12 w-auto rounded-2xl"
                />
              </a>
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105 rounded-2xl overflow-hidden"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/ap.svg"
                  alt="Get it on Google Play"
                  width={218}
                  height={78}
                  className="h-12 w-auto rounded-2xl"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CribEasy</h3>
              <p className="text-gray-400">
                Your trusted community-driven real estate platform. Find verified listings, 
                connect with neighbors, and discover your perfect neighborhood home.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/eula" className="hover:text-white transition-colors">End User License Agreement</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CribEasy. All rights reserved.</p>
            <p className="mt-2 text-sm">Building trusted communities, one neighborhood at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

