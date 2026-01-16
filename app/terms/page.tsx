import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for CribEasy mobile application and services. Please read these terms carefully before using our platform.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00419c' }}>
            TERMS OF USE
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Welcome to CribEasy. These Terms of Use (&quot;Terms&quot;) govern your access to and use of the CribEasy 
              mobile application (&quot;App&quot;), website, and related services (collectively, the &quot;Services&quot;) provided by 
              CribEasy (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our Services, you agree to be bound 
              by these Terms. If you do not agree to these Terms, please do not use our Services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By creating an account, downloading, installing, accessing, or using the Services, you acknowledge that 
              you have read, understood, and agree to be bound by these Terms and our Privacy Policy, which is incorporated 
              herein by reference. If you are using the Services on behalf of an organization, you represent and warrant 
              that you have the authority to bind that organization to these Terms.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              2. ELIGIBILITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You must be at least 18 years old to use our Services. By using the Services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>You are at least 18 years of age or have the consent of a parent or guardian</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>You will comply with all applicable laws and regulations</li>
              <li>All information you provide is accurate, current, and complete</li>
              <li>You will maintain the security of your account credentials</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              3. ACCOUNT REGISTRATION AND SECURITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of the Services, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information during registration</li>
              <li>Maintain and promptly update your account information</li>
              <li>Maintain the security and confidentiality of your account credentials</li>
              <li>Accept responsibility for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized access or use of your account</li>
              <li>Not share your account credentials with any third party</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              4. USE OF SERVICES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may use our Services for lawful purposes only. You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Violate any applicable laws, regulations, or third-party rights</li>
              <li>Post false, misleading, or fraudulent information</li>
              <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
              <li>Harass, abuse, threaten, or harm other users</li>
              <li>Spam, phish, or engage in any fraudulent activity</li>
              <li>Upload or transmit viruses, malware, or other harmful code</li>
              <li>Interfere with or disrupt the Services or servers connected to the Services</li>
              <li>Use automated systems, bots, or scripts to access or use the Services without our prior written consent</li>
              <li>Scrape, crawl, or index any content from the Services</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices</li>
              <li>Use the Services for any commercial purpose without our express written consent</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              5. USER CONTENT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of any content you submit, post, upload, or transmit through the Services (&quot;User Content&quot;). 
              By submitting User Content, you grant us a worldwide, royalty-free, non-exclusive, perpetual, irrevocable, and 
              sublicensable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content 
              in connection with the Services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>You own or have the necessary rights to grant the license set forth above</li>
              <li>Your User Content does not infringe, misappropriate, or violate any third-party rights</li>
              <li>Your User Content is not defamatory, libelous, obscene, or offensive</li>
              <li>Your User Content does not violate any applicable laws or regulations</li>
              <li>Your User Content is accurate and not misleading</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to remove, edit, or refuse to post any User Content at our sole discretion, without prior notice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              6. PROPERTY LISTINGS AND TRANSACTIONS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Services facilitate connections between renters, agents, landlords, and service providers. We are not a party 
              to any transactions or agreements between users. You acknowledge and agree that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>We do not verify the accuracy of property listings or user information</li>
              <li>We are not responsible for the quality, safety, or legality of properties listed on the Services</li>
              <li>We are not responsible for the conduct of any users</li>
              <li>You are solely responsible for verifying the accuracy of information and conducting due diligence</li>
              <li>Any agreements or transactions are between you and other users, not with CribEasy</li>
              <li>We are not liable for any disputes, losses, or damages arising from transactions between users</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              7. PAYMENTS AND FEES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Certain features of the Services may require payment. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Provide accurate payment information</li>
              <li>Pay all fees and charges associated with your use of paid features</li>
              <li>Authorize us to charge your payment method for applicable fees</li>
              <li>Understand that all fees are non-refundable unless otherwise stated</li>
              <li>Comply with the terms of any third-party payment processors we use</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to change our fees at any time. We will provide notice of any fee changes in advance.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              8. INTELLECTUAL PROPERTY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Services, including all content, features, functionality, design, graphics, text, images, logos, icons, and software, 
              are owned by CribEasy or its licensors and are protected by copyright, trademark, patent, trade secret, and other 
              intellectual property laws. Except as expressly provided in these Terms, no part of the Services may be copied, 
              reproduced, distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any means without 
              our prior written permission.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              9. PRIVACY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the Services is also governed by our Privacy Policy, which is incorporated into these Terms by reference. 
              Please review our Privacy Policy carefully to understand how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              10. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
              INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
              NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, 
              SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              11. LIMITATION OF LIABILITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, 
              OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OR INABILITY TO USE THE SERVICES.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS 
              PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              12. INDEMNIFICATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless CribEasy, its affiliates, officers, directors, employees, agents, 
              licensors, and suppliers from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including 
              reasonable attorneys&apos; fees) arising out of or relating to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Your use of the Services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights, including intellectual property rights or privacy rights</li>
              <li>Your User Content</li>
              <li>Your conduct in connection with the Services</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              13. TERMINATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access to the Services at any time, with or without cause or notice, for any reason, 
              including if you breach these Terms. Upon termination, your right to use the Services will immediately cease, and you 
              must delete the App from your device.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may terminate your account at any time by deleting your account through the App settings or by contacting us. 
              Upon termination, we may delete your account and User Content, except where we are required to retain it for legal 
              or legitimate business purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              14. GOVERNING LAW AND DISPUTE RESOLUTION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its 
              conflict of law provisions. Any disputes arising out of or relating to these Terms or the Services shall be resolved 
              through binding arbitration in accordance with the rules of [Arbitration Organization], except where prohibited by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              15. CHANGES TO THESE TERMS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the 
              updated Terms in the App or by other reasonable means. Your continued use of the Services after such modifications 
              constitutes your acceptance of the updated Terms. If you do not agree to the modifications, you must stop using the Services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              16. SEVERABILITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable, the remaining provisions shall 
              continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              17. ENTIRE AGREEMENT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These Terms, together with the Privacy Policy and any other legal notices published by us in the Services, constitute 
              the entire agreement between you and CribEasy regarding your use of the Services and supersede all prior agreements and 
              understandings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              18. CONTACT INFORMATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> support@cribtechafrik.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Legal Email:</strong> legal@cribeasyapp.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> [Company Address]
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                By using the CribEasy Services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use.
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

