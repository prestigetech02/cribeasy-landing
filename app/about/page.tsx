"use client";

import Header from "../components/Header";
import Image from "next/image";
import { FaBullseye, FaEye, FaShieldAlt, FaUsers, FaHome, FaTools, FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 bg-[#F5F5F0]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: '#00419c' }}>
                About CribEasy
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                CribEasy is a community-driven real estate platform that simplifies house hunting in Nigeria by connecting renters, 
                verified agents, and residents through neighborhood-specific insights. We don&apos;t just find you a house; 
                we connect you to a community where you can thrive.
              </p>
              <button 
                className="px-8 py-4 rounded-full font-medium text-base text-white transition-colors"
                style={{ backgroundColor: '#00419c' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}
              >
                Learn More
              </button>
            </div>

            {/* Right Column - Images */}
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Left Column - Two stacked images */}
              <div className="space-y-3">
                {/* Top Image */}
                <div className="rounded-2xl overflow-hidden">
                  <div className="w-full h-40 md:h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Image 1</p>
                  </div>
                </div>
                
                {/* Bottom Image */}
                <div className="rounded-2xl overflow-hidden">
                  <div className="w-full h-40 md:h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Image 2</p>
                  </div>
                </div>
              </div>
              
              {/* Right Column - One large image spanning two rows */}
              <div className="rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center min-h-[calc(2*10rem+0.75rem)] md:min-h-[calc(2*12rem+0.75rem)]">
                  <p className="text-gray-500 text-sm">Image 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Our Mission */}
            <div 
              className="bg-gray-50 rounded-xl p-8 transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f4f8';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#00419c' }}>
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#00419c' }}>
                Our Mission
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                To revolutionize the real estate rental experience by creating a trusted, community-driven platform 
                that connects renters with verified properties and fosters genuine neighborhood connections. We aim 
                to make finding a home seamless, transparent, and community-focused.
              </p>
            </div>

            {/* Our Vision */}
            <div 
              className="bg-gray-50 rounded-xl p-8 transition-all duration-300 cursor-pointer"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f4f8';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f9fafb';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#00419c' }}>
                <FaEye className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#00419c' }}>
                Our Vision
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                To become the leading community-driven real estate platform in Nigeria and beyond, where every renter 
                finds their perfect home, every agent connects with verified clients, and every neighborhood thrives 
                through genuine connections and trusted relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Who We Are & Details */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">

            {/* Who We Are */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00419c' }}>
                Who We Are
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                CribEasy is a mobile-first real estate platform tailored for the Nigerian market, specifically designed 
                for neighborhood-level discovery. We believe that finding a home is about more than just property specs; 
                it is about finding a community where you belong. Our platform bridges the gap between searching for a 
                house and integrating into a neighborhood.
              </p>
            </div>

            {/* The Problem We're Solving */}
            <div className="mb-12 bg-blue-50 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00419c' }}>
                The Problem We&apos;re Solving
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In many Nigerian communities, finding trusted rentals and connecting with local insights is difficult, 
                time-consuming, and risky. CribEasy was built to reduce housing scams and provide access to hyperlocal 
                services and genuine connections that go beyond traditional property listings.
              </p>
            </div>

            {/* Our Core Goals */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#00419c' }}>
                Our Core Goals
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#00419c' }}>
                    <FaCheckCircle className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Simplify the Search</h3>
                    <p className="text-gray-700">
                      We use hyper-local listings and insights to make the house-hunting process seamless.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#00419c' }}>
                    <FaShieldAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reduce Fraud</h3>
                    <p className="text-gray-700">
                      We protect our users with a mandatory identity verification system for all agents and landlords.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#00419c' }}>
                    <FaUsers className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Encourage Engagement</h3>
                    <p className="text-gray-700">
                      We foster community growth through local forums, reviews, and community event calendars.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#00419c' }}>
                    <FaTools className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Local Integration</h3>
                    <p className="text-gray-700">
                      We connect renters with relevant local services, such as rated artisans and neighborhood businesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who We Serve & Trust */}
      <section className="py-16 bg-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Who We Serve */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#00419c' }}>
                Who We Serve
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00419c' }}>
                      <FaUsers className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Renters</h3>
                  </div>
                  <p className="text-gray-700">
                    People looking for trusted houses and apartments who want to understand the &quot;personality&quot; 
                    of their next neighborhood.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00419c' }}>
                      <FaShieldAlt className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Verified Agents</h3>
                  </div>
                  <p className="text-gray-700">
                    Professional agents who want to grow their client base in specific neighborhoods through a verified, 
                    trusted status.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00419c' }}>
                      <FaHome className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Landlords</h3>
                  </div>
                  <p className="text-gray-700">
                    Property owners who want to list their homes directly and manage their own rental inquiries.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00419c' }}>
                      <FaTools className="text-white text-xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Artisans</h3>
                  </div>
                  <p className="text-gray-700">
                    Local workmen living within the community who provide essential services to their neighbors.
                  </p>
                </div>
              </div>
            </div>

            {/* Built on Trust */}
            <div className="mb-12 bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#00419c' }}>
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00419c' }}>
                  Built on Trust
                </h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Safety is at the heart of everything we do. From secure account verification via email or mobile phone 
                to end-to-end encrypted chat and GDPR-compliant data practices, we ensure a secure environment for all 
                our users.
              </p>
            </div>

            {/* Summary Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white">
              <div className="max-w-4xl">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">What We Offer:</h3>
                  <ul className="space-y-2 text-lg">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white text-xl mr-3 mt-1 flex-shrink-0" />
                      <span>Verified rental listings</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white text-xl mr-3 mt-1 flex-shrink-0" />
                      <span>Neighborhood safety and amenity data</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white text-xl mr-3 mt-1 flex-shrink-0" />
                      <span>Local community forums</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-white text-xl mr-3 mt-1 flex-shrink-0" />
                      <span>A directory of rated area artisans</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <p className="text-xl font-semibold">
                    Core Promise: We don&apos;t just find you a house; we connect you to a community where you can thrive.
                  </p>
                </div>
              </div>
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
                <li><a href="/#features" className="hover:text-white transition-colors">Features</a></li>
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
                <li><a href="/contact" className="hover:text-white transition-colors">Help Center</a></li>
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

