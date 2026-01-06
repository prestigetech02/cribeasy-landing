import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CribEasy mobile application and services. Learn how we collect, use, and protect your personal information.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00419c' }}>
            PRIVACY POLICY
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              At CribEasy (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), we are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our mobile application (&quot;App&quot;) and related services (&quot;Services&quot;). Please read this Privacy Policy carefully. 
              By using our App and Services, you consent to the data practices described in this policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              1. INFORMATION WE COLLECT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information that you provide directly to us and information that is automatically collected 
              when you use our Services:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#00419c' }}>
              1.1 Information You Provide to Us
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Account Information:</strong> Name, email address, phone number, password, and profile information</li>
              <li><strong>Verification Information:</strong> Documents and information required for account verification (email, SMS verification codes)</li>
              <li><strong>Property Information:</strong> Property listings, descriptions, photos, location data, and pricing information</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, and other communications sent through the App</li>
              <li><strong>Payment Information:</strong> Payment method details, billing address, and transaction history (processed through secure third-party payment processors)</li>
              <li><strong>Community Content:</strong> Posts, reviews, comments, and other content you submit to community features</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#00419c' }}>
              1.2 Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Device Information:</strong> Device type, operating system, unique device identifiers, mobile network information</li>
              <li><strong>Usage Data:</strong> How you interact with the App, features used, pages viewed, time spent, and navigation patterns</li>
              <li><strong>Location Data:</strong> Precise or approximate location information when you use location-based features</li>
              <li><strong>Log Data:</strong> IP address, browser type, access times, pages visited, and referring website addresses</li>
              <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              2. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>To provide, maintain, and improve our Services</li>
              <li>To create and manage your account and verify your identity</li>
              <li>To process transactions and send related information</li>
              <li>To facilitate communication between users (renters, agents, landlords, service providers)</li>
              <li>To display property listings and match users with relevant properties</li>
              <li>To send you technical notices, updates, security alerts, and support messages</li>
              <li>To respond to your comments, questions, and requests</li>
              <li>To monitor and analyze trends, usage, and activities</li>
              <li>To detect, prevent, and address technical issues and fraudulent activity</li>
              <li>To personalize your experience and provide content and features relevant to your interests</li>
              <li>To send you marketing communications (with your consent where required)</li>
              <li>To comply with legal obligations and enforce our terms and policies</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              3. HOW WE SHARE YOUR INFORMATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#00419c' }}>
              3.1 With Other Users
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your profile information, property listings, and public content may be visible to other users of the App 
              as necessary to provide our Services.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#00419c' }}>
              3.2 With Service Providers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with third-party service providers who perform services on our behalf, 
              such as payment processing, data analytics, email delivery, hosting services, and customer support.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#00419c' }}>
              3.3 For Legal Reasons
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may disclose your information if required by law, regulation, legal process, or governmental request, 
              or to protect the rights, property, or safety of CribEasy, our users, or others.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#00419c' }}>
              3.4 Business Transfers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In the event of a merger, acquisition, reorganization, or sale of assets, your information may be 
              transferred as part of that transaction.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              4. DATA SECURITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your information against 
              unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the 
              Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
              your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              5. YOUR RIGHTS AND CHOICES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Opt-Out:</strong> Opt out of certain data processing activities, such as marketing communications</li>
              <li><strong>Account Settings:</strong> Update your account information and privacy preferences through the App settings</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              To exercise these rights, please contact us using the contact information provided at the end of this Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              6. DATA RETENTION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to provide our Services, comply with legal obligations, 
              resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your 
              personal information, except where we are required to retain it for legal or legitimate business purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              7. CHILDREN&apos;S PRIVACY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If you become aware that a child has provided us with personal information, 
              please contact us immediately. If we become aware that we have collected personal information from a child 
              without verification of parental consent, we will take steps to delete that information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              8. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have data protection laws that differ from those in your country. By using our Services, 
              you consent to the transfer of your information to these countries.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              9. COOKIES AND TRACKING TECHNOLOGIES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to collect and use information about you. You can control 
              cookies through your browser settings, but disabling cookies may limit your ability to use certain features 
              of our Services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              10. THIRD-PARTY LINKS AND SERVICES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services may contain links to third-party websites, services, or applications that are not owned or 
              controlled by CribEasy. We are not responsible for the privacy practices of these third parties. We encourage 
              you to review the privacy policies of any third-party services you access.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              11. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
              the new Privacy Policy in the App and updating the &quot;Effective Date&quot; at the top of this policy. Your continued 
              use of our Services after such modifications constitutes your acceptance of the updated Privacy Policy.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              12. CONTACT US
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> privacy@cribeasyapp.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Support Email:</strong> support@cribeasyapp.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> [Company Address]
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                By using the CribEasy App, you acknowledge that you have read, understood, and agree to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>

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
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
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
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Support</Link></li>
                <li><Link href="/#contact" className="hover:text-white transition-colors">Help Center</Link></li>
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

