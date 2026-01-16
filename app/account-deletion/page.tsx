"use client";

import { useState, useRef } from "react";
import Header from "../components/Header";
import Link from "next/link";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function AccountDeletionPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate captcha
    if (!captchaToken) {
      setSubmitStatus("error");
      alert("Please complete the captcha verification");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Using Web3Forms - free, unlimited, no verification needed
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "cfe78a63-d244-4782-bbba-f1b6500776a1",
          subject: "Account Deletion Request",
          from_name: formData.name,
          from_email: formData.email,
          message: `Account Deletion Request\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
          to: "support@cribtechafrik.com",
          "h-captcha-response": captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setCaptchaToken(null);
        captchaRef.current?.resetCaptcha();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus("error");
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="w-full rounded-[32px] py-16 px-8 md:px-12 text-center" style={{ backgroundColor: '#00419c' }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Account & Data Deletion Request
            </h1>
            <p className="text-xl text-white/90">
              Request deletion of your CribEasy account and associated personal data
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Information Section - Left */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6" style={{ color: '#00419c' }}>
                  Account and Data Deletion
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  CribEasy users may request deletion of their account and associated personal data by contacting us through this page.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#00419c' }}>
                  How to request deletion:
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>Submit a message using the contact form or email us.</li>
                  <li>Use the subject line: <strong>Account Deletion Request</strong>.</li>
                  <li>Include the email address associated with your CribEasy account.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#00419c' }}>
                  What will be deleted:
                </h3>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                  <li>User account information</li>
                  <li>Listings and uploaded content</li>
                  <li>Profile data</li>
                </ul>

                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Data retention:</h4>
                  <p className="text-gray-700">
                    Certain data may be retained for legal, security, or fraud-prevention purposes as required by law.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Processing time:</h4>
                  <p className="text-gray-700">
                    Requests are typically processed within 7–30 days.
                  </p>
                </div>
              </div>

              {/* Deletion Request Form - Right */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#00419c' }}>
                Submit Deletion Request
              </h2>
              
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-green-800">
                    Thank you for your request! We&apos;ve received your account deletion request and will process it within 7–30 days. You&apos;ll receive a confirmation email shortly.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-800">
                    Something went wrong. Please try again later or email us directly at{" "}
                    <a href="mailto:support@cribtechafrik.com?subject=Account Deletion Request" className="underline">
                      support@cribtechafrik.com
                    </a>
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address Associated with Your Account *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="your-email@example.com"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    This must be the email address associated with your CribEasy account
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Please provide any additional information that may help us process your request..."
                  />
                </div>

                <div>
                  <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={handleCaptchaVerify}
                    ref={captchaRef}
                    reCaptchaCompat={false}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !captchaToken}
                  className="w-full text-white px-6 py-4 rounded-full font-medium text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: '#00419c' }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting && captchaToken) {
                      e.currentTarget.style.backgroundColor = '#003080';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#00419c';
                    }
                  }}
                >
                  {isSubmitting ? "Submitting Request..." : "Submit Deletion Request"}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  Alternatively, you can email us directly at{" "}
                  <a href="mailto:support@cribtechafrik.com?subject=Account Deletion Request" className="text-blue-600 hover:underline">
                    support@cribtechafrik.com
                  </a>
                  {" "}with the subject line &quot;Account Deletion Request&quot;
                </p>
              </form>
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
                <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/eula" className="hover:text-white transition-colors">
                    End User License Agreement
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/account-deletion" className="hover:text-white transition-colors">Account Deletion</Link></li>
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
