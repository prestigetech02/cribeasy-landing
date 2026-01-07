"use client";

import { useState } from "react";
import Header from "../components/Header";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "General",
    question: "What is CribEasy?",
    answer: "CribEasy is a community-driven real estate platform that simplifies house hunting in Nigeria by connecting renters, verified agents, and residents through neighborhood-specific insights. We don't just find you a house; we connect you to a community where you can thrive."
  },
  {
    category: "General",
    question: "How is CribEasy different from other real estate platforms?",
    answer: "CribEasy focuses on neighborhood-level discovery and community integration. We provide hyperlocal insights, verified listings, community forums, and connect you with local services. Our platform emphasizes trust through mandatory verification and helps you understand the 'personality' of neighborhoods, not just property specs."
  },
  {
    category: "For Renters",
    question: "How do I search for properties on CribEasy?",
    answer: "You can search for properties by neighborhood, property type, price range, and other filters. Our platform shows verified listings with detailed neighborhood insights, safety ratings, amenities, and community reviews to help you make informed decisions."
  },
  {
    category: "For Renters",
    question: "Are all listings on CribEasy verified?",
    answer: "Yes, all agents and landlords on CribEasy must complete our mandatory identity verification process before they can list properties. This helps reduce fraud and ensures you're dealing with trusted individuals."
  },
  {
    category: "For Renters",
    question: "Can I see neighborhood information before viewing a property?",
    answer: "Absolutely! CribEasy provides comprehensive neighborhood profiles including safety ratings, local amenities, transportation options, community vibes, and reviews from current residents. This helps you understand if a neighborhood is the right fit for you."
  },
  {
    category: "For Renters",
    question: "How do I contact agents or landlords?",
    answer: "You can message agents and landlords directly through our secure, in-app messaging system. All communications are end-to-end encrypted to ensure your privacy and security."
  },
  {
    category: "For Agents",
    question: "How do I become a verified agent on CribEasy?",
    answer: "To become a verified agent, you need to complete our identity verification process which includes email or SMS verification. Once verified, you'll receive a verified badge that helps build trust with potential renters and increases your visibility on the platform."
  },
  {
    category: "For Agents",
    question: "Is it free to list properties on CribEasy?",
    answer: "Yes, listing properties on CribEasy is completely free. There are no hidden fees or commission charges. You can list unlimited properties and connect directly with verified renters in your neighborhood."
  },
  {
    category: "For Agents",
    question: "How do I manage my listings?",
    answer: "CribEasy provides a comprehensive dashboard where you can manage all your listings, track inquiries, schedule viewings, and communicate with potential tenants. You have full control over your property listings and tenant communications."
  },
  {
    category: "For Landlords",
    question: "Can I list my property directly without an agent?",
    answer: "Yes! Landlords can list their properties directly on CribEasy. You can manage your own listings, respond to inquiries, and handle all communications with potential tenants through our platform."
  },
  {
    category: "For Landlords",
    question: "What information do I need to provide when listing a property?",
    answer: "You'll need to provide property details including address, type, size, rent price, photos, and a description. You can also add information about amenities, nearby facilities, and neighborhood highlights to attract the right tenants."
  },
  {
    category: "Safety & Security",
    question: "How does CribEasy protect users from scams?",
    answer: "CribEasy uses mandatory identity verification for all agents and landlords, secure end-to-end encrypted messaging, and community reviews. We also have reporting mechanisms in place to quickly address any suspicious activity. Our verification system significantly reduces the risk of housing scams."
  },
  {
    category: "Safety & Security",
    question: "Is my personal information safe on CribEasy?",
    answer: "Yes, your privacy and security are our top priorities. We use GDPR-compliant data practices, secure account verification, and end-to-end encrypted communications. Your personal information is protected and never shared without your consent."
  },
  {
    category: "Community Features",
    question: "What are community forums?",
    answer: "Community forums allow residents and renters to connect, share recommendations, ask questions, and discuss neighborhood topics. It's a space to build genuine connections and get insights from people who live in the area."
  },
  {
    category: "Community Features",
    question: "Can I find local services and artisans on CribEasy?",
    answer: "Yes! CribEasy includes a directory of rated local artisans and neighborhood businesses. You can find trusted service providers like plumbers, electricians, cleaners, and more, all rated by the community."
  },
  {
    category: "Community Features",
    question: "How do I participate in community events?",
    answer: "You can browse and join community events through our event calendar. From block parties to farmers markets, you'll never miss out on what's happening in your neighborhood. You can also create and list your own community events."
  },
  {
    category: "Technical",
    question: "Is CribEasy available on mobile?",
    answer: "Yes, CribEasy is a mobile-first platform. You can download our app on iOS and Android devices. The platform is designed to work seamlessly on mobile devices, making it easy to search for properties and connect with your community on the go."
  },
  {
    category: "Technical",
    question: "What should I do if I encounter a technical issue?",
    answer: "If you experience any technical issues, please contact our support team through the contact page or email us at Cribeasy@cribeasysupport.com. We're here to help and will respond as soon as possible."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="w-full rounded-[32px] py-16 px-8 md:px-12 text-center" style={{ backgroundColor: '#00419c' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions about CribEasy and how we can help you find your perfect home.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setOpenIndex(null);
                    }}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'text-white'
                        : 'text-gray-700 bg-white border border-gray-200 hover:border-blue-500'
                    }`}
                    style={
                      selectedCategory === category
                        ? { backgroundColor: '#00419c' }
                        : {}
                    }
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-700 leading-relaxed mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still Have Questions */}
            <div className="mt-12 bg-blue-50 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#00419c' }}>
                Still Have Questions?
              </h2>
              <p className="text-gray-700 mb-6">
                Can&apos;t find the answer you&apos;re looking for? Our support team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 rounded-full font-medium text-white transition-colors"
                style={{ backgroundColor: '#00419c' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003080'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#00419c'}
              >
                Contact Support
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


