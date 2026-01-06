"use client";

import Header from "../components/Header";
import Image from "next/image";

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
                CribEasy is a community-driven real estate platform that changes how people find their perfect home. 
                We connect renters, agents, and service providers through verified listings and trusted community connections, 
                making the rental process seamless and transparent.
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

