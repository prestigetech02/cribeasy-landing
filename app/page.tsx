"use client";

import Image from "next/image";
import { useState } from "react";
import { FaUserPlus, FaSearch, FaHandshake } from "react-icons/fa";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
            <Image
              src="/images/cribeasy-logo.jpg"
              alt="CribEasy Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
            </div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors">Service</a>
              <a href="#for-users" className="text-gray-700 hover:text-gray-900 transition-colors">Portfolio</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">Blog</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</a>
            </div>

            {/* Desktop Buttons - Right */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <button className="text-gray-700 hover:text-gray-900 transition-colors">
                Download
              </button>
              <button className="text-white px-6 py-3 rounded-full transition-colors font-medium text-base" style={{ backgroundColor: '#00419c' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}>
                Join CribEasy
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Service
                </a>
                <a
                  href="#for-users"
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="#"
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <div className="flex flex-col space-y-3 pt-2">
                  <button className="text-gray-700 hover:text-gray-900 transition-colors text-left py-2">
                    Download
                  </button>
                  <button className="text-white px-6 py-4 rounded-full transition-colors font-medium text-base w-full" style={{ backgroundColor: '#00419c' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}>
                    Join CribEasy
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-20">
          <div className="bg-blue-50 rounded-2xl px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
            <div className="grid md:grid-cols-2 gap-8 items-end">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              <div className="px-4 py-8 md:px-6 md:py-12">
                <p className="text-gray-500 mb-4 text-[18px]">Welcome to CribEasy</p>
                <h1 className="font-bold mb-6 leading-tight text-[38px] md:text-[40px] lg:text-[52px]" style={{ color: '#00419c' }}>
                  Find Your Perfect Home{" "}
                  <span style={{ color: '#F68A1E' }}>Hassle-Free</span>{" "}
                  on Cribeasy
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed text-[20px] md:text-[22px]">
                  A community-driven real estate platform connecting renters, agents, and residents through 
                  verified listings, neighborhood insights, and trusted community connections.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button className="text-white px-8 py-5 rounded-full font-medium transition-colors shadow-lg w-full sm:w-auto text-[20px]" style={{ backgroundColor: '#00419c' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Mockup */}
            <div className="flex justify-center items-end relative z-10">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/images/cribeasy-hero.png"
                  alt="CribEasy Mobile App"
                  width={400}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#00419c' }}>How It Works</h2>
            <p className="text-lg text-gray-600 mb-16 leading-relaxed">
              Get started with CribEasy in three simple steps. Find your perfect neighborhood home 
              through our community-driven platform with verified listings and trusted connections.
            </p>

            {/* Steps */}
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-12 md:gap-16 relative">
                {/* Step 1 */}
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 relative" style={{ backgroundColor: '#F68A1E' }}>
                    <FaUserPlus className="text-2xl text-white" />
                    {/* Connector Line to Step 2 */}
                    <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 border-t-2 border-dashed border-gray-300" style={{ transform: 'translateY(-50%)', marginLeft: '2rem' }}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#00419c' }}>Join Your Neighborhood</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sign up and select your community. Get verified with email or SMS to access 
                    hyperlocal listings and neighborhood insights tailored to your area.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 relative" style={{ backgroundColor: '#F68A1E' }}>
                    <FaSearch className="text-2xl text-white" />
                    {/* Connector Line to Step 3 */}
                    <div className="hidden md:block absolute top-1/2 left-full w-16 h-0.5 border-t-2 border-dashed border-gray-300" style={{ transform: 'translateY(-50%)', marginLeft: '2rem' }}></div>
                  </div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#00419c' }}>Browse Verified Listings</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Explore verified rental properties from trusted agents and landlords. View 
                    detailed neighborhood data, amenities, and community reviews to make informed decisions.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: '#F68A1E' }}>
                    <FaHandshake className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-6" style={{ color: '#00419c' }}>Connect & Secure Your Home</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Message agents and landlords directly through our secure platform. Schedule visits, 
                    complete bookings, and join your new community with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" className="bg-blue-50/30 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose CribEasy?
          </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Listings</h3>
            <p className="text-gray-600">
              All agents and landlords are verified before listing. Reduce fraud and find trusted properties 
              with confidence.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Neighborhood Insights</h3>
            <p className="text-gray-600">
              Get hyperlocal data about amenities, safety ratings, transportation, and community vibes 
              for each neighborhood.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Engagement</h3>
            <p className="text-gray-600">
              Connect with neighbors through forums, reviews, and local events. Build genuine 
              neighborhood connections beyond property listings.
            </p>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct Messaging</h3>
            <p className="text-gray-600">
              Safely communicate with agents and landlords through our secure, in-app messaging system.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Business Directory</h3>
            <p className="text-gray-600">
              Discover trusted artisans, shops, and services in your neighborhood, rated by the community.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Event Calendar</h3>
            <p className="text-gray-600">
              Browse and list community activities, events, and neighborhood gatherings to stay connected.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Renters Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#00419c' }}>
                Search properties in your Community
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CribEasy isn&apos;t just about finding a place to live—it&apos;s about becoming part of a vibrant community. 
                Connect with neighbors, discover local events, and build lasting relationships in your new neighborhood.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with Neighbors</h3>
                    <p className="text-gray-600">
                      Join community forums, participate in discussions, and get to know the people who make your 
                      neighborhood special. Share recommendations, ask questions, and build genuine connections.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Discover Local Events</h3>
                    <p className="text-gray-600">
                      Stay updated on neighborhood gatherings, community events, and local activities. From block 
                      parties to farmers markets, never miss out on what&apos;s happening in your area.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore Local Businesses</h3>
                    <p className="text-gray-600">
                      Find trusted local services, restaurants, and shops recommended by your neighbors. Support 
                      community businesses and discover hidden gems in your neighborhood.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/community-image.png"
                  alt="Community Connection"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Users Section */}
      <section id="for-users" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Built for Everyone
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-blue-50">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Renters</h3>
              <p className="text-gray-600 mb-4">
                Find verified rental listings in your chosen neighborhood. Get hyperlocal insights, 
                connect with neighbors, and discover local services.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified property listings
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Neighborhood insights
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Community forums & events
                </li>
              </ul>
            </div>
            <div className="text-center p-8 rounded-xl bg-purple-50">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Agents</h3>
              <p className="text-gray-600 mb-4">
                Get verified and reach more clients in your neighborhood. Manage listings, track inquiries, 
                and grow your business.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified agent profile
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Listing management dashboard
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Premium subscription options
                </li>
              </ul>
            </div>
            <div className="text-center p-8 rounded-xl bg-green-50">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Landlords</h3>
              <p className="text-gray-600 mb-4">
                List your properties directly to verified renters in your community. Manage applications 
                and connect with potential tenants.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Direct property listings
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Application tracking
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  &quot;For Rent by Neighbor&quot; option
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">About CribEasy</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              CribEasy is a community-driven real estate platform that connects renters, agents, and residents 
              through neighborhood-based insights, verified listings, and social tools that foster trust, 
              transparency, and community integration.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Our Mission</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Simplify the house-hunting process through hyper-local listings
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Reduce fraud with verified agents and landlords
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Encourage community engagement through local forums
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Access to verified rental listings
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Community forums and events to connect with neighbors
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Detailed neighborhood profiles with real context
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community-driven platform and experience trusted, verified real estate listings 
            in your neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-5 rounded-full text-base font-medium hover:bg-gray-100 transition-colors">
              Start Searching
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-5 rounded-full text-base font-medium hover:bg-white hover:text-blue-600 transition-colors">
              Become an Agent
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">CribEasy</h3>
              <p className="text-gray-400">
                Your trusted community-driven real estate platform. Find verified listings, 
                connect with neighbors, and discover your perfect neighborhood home.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">For Users</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#for-users" className="hover:text-white transition-colors">For Renters</a></li>
                <li><a href="#for-users" className="hover:text-white transition-colors">For Agents</a></li>
                <li><a href="#for-users" className="hover:text-white transition-colors">For Landlords</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Neighborhood Pages</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Community Forums</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Local Directory</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
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

