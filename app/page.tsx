"use client";

import Image from "next/image";
import Header from "./components/Header";
import { useState, useEffect } from "react";

interface Property {
  id: number;
  property_title: string;
  property_ref_id: string;
  property_cover: string;
  cloudinary_id: string | null;
  property_category: string;
  favorited_by_me: boolean;
  is_active: number;
  is_boosted: number;
  reviews_count: number;
  average_stars: number;
  property_detail: {
    id: number;
    property_address: string;
    rent_price: string;
  };
}

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('https://cribeasyapp.com/api/v1/landing/properties');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.success && data.data && Array.isArray(data.data)) {
          // Limit to 12 properties (3 rows x 4 columns)
          setProperties(data.data.slice(0, 12));
        } else {
          console.error('Unexpected response format:', data);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    if (numPrice >= 1000000) {
      return `₦${(numPrice / 1000000).toFixed(1)}M`;
    } else if (numPrice >= 1000) {
      return `₦${(numPrice / 1000).toFixed(0)}K`;
    }
    return `₦${numPrice.toLocaleString()}`;
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Schema.org structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CribEasy",
    "description": "Community-driven real estate platform connecting renters, agents, and residents through verified listings and neighborhood insights",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://cribeasyapp.com",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://cribeasyapp.com"}/images/cribeasy-logo.jpg`,
    "sameAs": [
      "https://twitter.com/cribeasy",
      "https://facebook.com/cribeasy",
      "https://linkedin.com/company/cribeasy"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "email": "support@cribeasyapp.com"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CribEasy",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://cribeasyapp.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${process.env.NEXT_PUBLIC_SITE_URL || "https://cribeasyapp.com"}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CribEasy",
    "applicationCategory": "RealEstateApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    }
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-6 pt-6 pb-6 md:pt-8 md:pb-8">
          <div className="bg-blue-50 rounded-2xl px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-10">
              <div className="px-4 py-8 md:px-6 md:py-12 text-center md:text-left">
                <p className="text-gray-500 mb-4 text-[18px]">Welcome to CribEasy</p>
                <h1 className="font-bold mb-6 leading-tight text-[38px] md:text-[40px] lg:text-[52px]" style={{ color: '#00419c' }}>
                  Find Your Perfect Home{" "}
                  <span style={{ color: '#F68A1E' }}>Hassle-Free</span>{" "}
                  on Cribeasy
                </h1>
                <p className="text-gray-600 mb-8 leading-relaxed text-[20px] md:text-[22px]">
                  A community-driven real estate platform connecting renters, agents, and service providers through 
                  verified listings, neighborhood insights, and trusted community connections.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <button className="text-white px-8 py-5 rounded-full font-medium transition-colors shadow-lg w-full sm:w-auto text-[20px]" style={{ backgroundColor: '#00419c' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Mobile Mockup */}
            <div className="flex justify-center items-center relative z-10">
              <div className="relative w-full max-w-sm">
                <Image
                  src="/images/home-1.png"
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

      {/* Properties Listings Section */}
      <section className="bg-white pt-8 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#00419c' }}>
              Featured Properties
            </h2>
            
            {loading ? (
              <div className="text-center py-12">
                <p className="text-gray-600">Loading properties...</p>
              </div>
            ) : properties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600">No properties available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                  >
                    {/* Image Container */}
                    <div className="relative h-48 w-full">
                      {property.is_boosted === 1 && (
                        <div className="absolute top-2 left-2 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-2 right-2 z-10 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {property.property_category}
                      </div>
                      <Image
                        src={property.property_cover || '/images/placeholder-property.jpg'}
                        alt={property.property_title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                        {property.property_title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem]">
                        {truncateText(
                          `${property.property_category} located in ${property.property_detail?.property_address || 'Lagos'}. ${property.reviews_count > 0 ? `Rated ${property.average_stars} stars by ${property.reviews_count} ${property.reviews_count === 1 ? 'reviewer' : 'reviewers'}.` : 'Modern amenities and community-focused living.'}`,
                          120
                        )}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="line-clamp-1">{property.property_detail?.property_address || 'Lagos'}</span>
                        </div>
                      </div>
                      {property.property_detail?.rent_price && parseFloat(property.property_detail.rent_price) > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-lg font-bold" style={{ color: '#00419c' }}>
                            {formatPrice(property.property_detail.rent_price)}
                            <span className="text-sm font-normal text-gray-500">/year</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
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
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#00419c' }}>
                Are you a renter in Lagos?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CribEasy isn&apos;t just about finding a place to live, it&apos;s about becoming part of a vibrant community in Lagos. 
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
                      Join community forums, participate in discussions, share recommendations, ask questions, and build genuine connections.
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Search for Artisans</h3>
                    <p className="text-gray-600">
                      Stay updated on artisans who can help you with your home repairs and maintenance. All on Cribeasy.
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
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Chat with Agents before inspection</h3>
                    <p className="text-gray-600">
                      Agents on CribEasy are ready to hear from you. Ask about the property you are interested in before inspection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center items-center order-1 md:order-2">
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

      {/* Community Section - Duplicate with Swapped Columns */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center items-center order-1 md:order-1">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/agent-chat.png"
                  alt="Community Connection"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-2 md:order-2">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#00419c' }}>
                Are you a Lagos agent/landlord?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Get verified, list your properties for free on CribEasy and reach thousands of verified renters in Lagos. 
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Property Listings</h3>
                    <p className="text-gray-600">
                      List your properties on CribEasy at absolutely no cost. No hidden fees, no commission 
                      charges.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Get messages from renters</h3>
                    <p className="text-gray-600">
                     Get messages from renters directly to your DM on CribEasy.
                      receive more inquiries and build trust with potential tenants faster.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Direct renters connections</h3>
                    <p className="text-gray-600">
                      Connect directly with verified renters in Lagos. Manage inquiries, schedule inspections, and 
                      communicate with potential tenants on CribEasy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Providers Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#00419c' }}>
                Skilled Workers & Service Providers
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Artisans and service providers connect with renters in their community easily on CribEasy. 
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Service Profile</h3>
                    <p className="text-gray-600">
                      Build a professional profile showcasing your skills and services.
                      And let renters find you easily on CribEasy.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Build Your Reputation</h3>
                    <p className="text-gray-600">
                      Receive reviews and ratings from satisfied renters in your community making it easier for renters to find and hire you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0" style={{ backgroundColor: '#F68A1E' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Connect with Renters in your community</h3>
                    <p className="text-gray-600">
                      Get discovered by renters in your neighborhood who need your services. Receive direct inquiries, 
                      schedule appointments, and communicate with clients all through CribEasy&apos;s secure platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="flex justify-center items-center order-1 md:order-2">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/service-provider.png"
                  alt="Service Providers and Skilled Workers"
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Agents & Landlords</h3>
              <p className="text-gray-600 mb-4">
                Get verified and reach more clients in your neighborhood. Manage listings, track inquiries, 
                and grow your business. List your properties directly to verified renters in your community.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified agent profile & direct listings
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
                  Application tracking & tenant management
                </li>
              </ul>
            </div>
            <div className="text-center p-8 rounded-xl bg-orange-50">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Artisans</h3>
              <p className="text-gray-600 mb-4">
                Showcase your skills and services to renters in your community. Build your reputation, 
                get discovered, and grow your local business.
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Create your service profile
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Build your reputation with reviews
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-orange-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Connect with local renters
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-2xl p-12 text-center text-white" style={{ backgroundColor: '#00419c' }}>
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Perfect Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community-driven platform and experience trusted, verified real estate listings 
            in your neighborhood.
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
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
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
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Neighborhood Pages</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Community Forums</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Local Directory</a></li>
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
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Report Issue</a></li>
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
    </>
  );
}

