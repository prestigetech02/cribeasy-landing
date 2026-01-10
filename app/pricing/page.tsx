"use client";

import Header from "../components/Header";
import Image from "next/image";
import { useState } from "react";

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState("agents");
  const pricingPlans = [
    {
      name: "Free",
      price: "₦0",
      period: "forever",
      description: "Perfect for renters and getting started",
      features: [
        "All renter features free",
        "Browse properties",
        "Connect with neighbors",
        "Search for artisans",
        "Community forums access",
        "Property reviews"
      ],
      popular: false,
      color: "gray"
    },
    {
      name: "Premium",
      price: "₦400",
      period: "per week",
      description: "12 months commitment",
      originalPrice: null,
      features: [
        "Unlimited property listings",
        "Unlimited chat/inquiries",
        "Full property insights",
        "Priority support",
        "Featured listings",
        "Analytics dashboard"
      ],
      popular: true,
      color: "blue"
    },
    {
      name: "Premium",
      price: "₦500",
      period: "per week",
      description: "6 months commitment",
      originalPrice: null,
      features: [
        "Unlimited property listings",
        "Unlimited chat/inquiries",
        "Full property insights",
        "Priority support",
        "Featured listings",
        "Analytics dashboard"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Premium",
      price: "₦600",
      period: "per week",
      description: "1 month commitment",
      originalPrice: null,
      features: [
        "Unlimited property listings",
        "Unlimited chat/inquiries",
        "Full property insights",
        "Priority support",
        "Featured listings",
        "Analytics dashboard"
      ],
      popular: false,
      color: "blue"
    }
  ];

  const freePlanLimits = [
    "Limited to 5 property listings",
    "Limited to 5 chat/inquiries",
    "Limited property insights"
  ];

  const serviceProviderInfo = {
    price: "Free",
    commission: "₦1,000",
    description: "per job completed through CribEasy"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#00419c' }}>
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Choose the plan that works best for you. All renters get full access for free.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center mb-12 border-b border-gray-200">
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                <button
                  onClick={() => setActiveTab("renters")}
                  className={`px-6 py-3 rounded-md font-semibold transition-all ${
                    activeTab === "renters"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={{
                    backgroundColor: activeTab === "renters" ? '#00419c' : 'transparent'
                  }}
                >
                  Renters
                </button>
                <button
                  onClick={() => setActiveTab("agents")}
                  className={`px-6 py-3 rounded-md font-semibold transition-all ${
                    activeTab === "agents"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={{
                    backgroundColor: activeTab === "agents" ? '#00419c' : 'transparent'
                  }}
                >
                  Agents & Landlords
                </button>
                <button
                  onClick={() => setActiveTab("artisans")}
                  className={`px-6 py-3 rounded-md font-semibold transition-all ${
                    activeTab === "artisans"
                      ? "text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                  style={{
                    backgroundColor: activeTab === "artisans" ? '#00419c' : 'transparent'
                  }}
                >
                  Artisans
                </button>
              </div>
            </div>

            {/* Renters Tab Content */}
            {activeTab === "renters" && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#00419c' }}>
                For Renters
              </h2>
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold" style={{ color: '#00419c' }}>₦0</span>
                      <span className="text-gray-600 ml-2">to join</span>
                    </div>
                    <p className="text-gray-600">Perfect for renters and getting started</p>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Agents & Landlords Tab Content */}
            {activeTab === "agents" && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-4" style={{ color: '#00419c' }}>
                For Agents & Landlords
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Free access with limitations. Upgrade to Premium for unlimited listings, chats, and insights.
              </p>

              {/* Plans Grid - Free + Premium */}
              <div className="grid md:grid-cols-4 gap-8">
                {/* Free Plan Card */}
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold" style={{ color: '#00419c' }}>₦0</span>
                      <span className="text-gray-600 ml-2">forever</span>
                    </div>
                    <p className="text-sm text-gray-600">Free access with limitations</p>
                  </div>
                </div>
                
                {/* Premium Plans */}
                {pricingPlans.slice(1).map((plan, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl p-8  border-2 transition-all duration-300 ${
                      plan.popular
                        ? 'border-blue-500 transform scale-105'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {plan.popular && (
                      <div className="text-white text-sm font-semibold px-4 py-1 rounded-full text-center mb-4" style={{ backgroundColor: '#F68A1E' }}>
                        Most Popular
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-5xl font-bold" style={{ color: '#00419c' }}>{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-sm text-gray-600">{plan.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Artisans Tab Content */}
            {activeTab === "artisans" && (
            <div>
              <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#00419c' }}>
                For Service Providers
              </h2>
              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-2xl p-8  border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Free to Join</h3>
                    <div className="mb-4">
                      <span className="text-5xl font-bold text-green-600">₦0</span>
                      <span className="text-gray-600 ml-2">registration</span>
                    </div>
                    <p className="text-gray-600 mb-4">Pay only when you get work</p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold">Commission:</span> {serviceProviderInfo.commission} {serviceProviderInfo.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Package Comparison Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#00419c' }}>
              Compare Plans
            </h2>
            <div className="bg-white rounded-2xl  overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-left font-semibold text-gray-900">Features</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Free</th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">Premium</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Property Listings</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-600">5 properties</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-semibold">Unlimited</span>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Chat/Inquiries</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-600">5 chats</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-semibold">Unlimited</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Property Insights</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-600">Limited</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-green-600 font-semibold">Full Access</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Analytics Dashboard</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Priority Support</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-gray-400">—</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Community Access</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 text-gray-700">Search Artisans</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-700">Profile Verification</td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="w-full rounded-2xl p-12 text-center text-white" style={{ backgroundColor: '#00419c' }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join CribEasy today and start connecting with your community. Choose the plan that works best for you.
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
                Your trusted community-driven real estate platform. Find verified listings,agents and service providers in your community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
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

