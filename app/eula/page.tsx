import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "End User License Agreement",
  description: "End User License Agreement for CribEasy mobile application and services.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function EULAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <Header />

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#00419c' }}>
            END USER LICENSE AGREEMENT
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            <strong>Effective Date:</strong> January 1, 2025
          </p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              This End User License Agreement (&quot;Agreement&quot;) is a legal agreement between you 
              (&quot;User&quot; or &quot;you&quot;) and CribEasy (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) 
              governing your use of the CribEasy mobile application (&quot;App&quot;) and related services 
              (&quot;Services&quot;). By downloading, installing, accessing, or using the App, you agree to be 
              bound by this Agreement. If you do not agree to these terms, do not use the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              1. DEFINITIONS
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li><strong>&quot;App&quot;</strong> means the CribEasy mobile application and all updates, 
              modifications, and versions thereof.</li>
              <li><strong>&quot;Services&quot;</strong> means all services, features, content, and functionality 
              provided through the App, including but not limited to property listings, community features, 
              messaging, and verification services.</li>
              <li><strong>&quot;User Content&quot;</strong> means any content, data, information, or materials 
              that you submit, post, upload, or transmit through the App.</li>
              <li><strong>&quot;Intellectual Property&quot;</strong> means all intellectual property rights, 
              including but not limited to copyrights, trademarks, trade secrets, patents, and proprietary 
              information.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              2. LICENSE GRANT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Subject to your compliance with this Agreement, Company grants you a limited, non-exclusive, 
              non-transferable, revocable license to download, install, and use the App on your personal 
              mobile device solely for your personal, non-commercial use. This license does not grant you 
              any rights to use Company&apos;s trademarks, service marks, logos, or other proprietary 
              information.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              3. LICENSE RESTRICTIONS
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Copy, modify, adapt, alter, translate, or create derivative works of the App;</li>
              <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code 
              of the App;</li>
              <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices on the App;</li>
              <li>Rent, lease, lend, sell, sublicense, assign, or otherwise transfer the App or your rights 
              under this Agreement;</li>
              <li>Use the App for any illegal purpose or in violation of any applicable laws or regulations;</li>
              <li>Interfere with or disrupt the App or servers or networks connected to the App;</li>
              <li>Use automated systems, bots, or scripts to access or use the App without Company&apos;s 
              prior written consent;</li>
              <li>Impersonate any person or entity or falsely state or misrepresent your affiliation with 
              any person or entity;</li>
              <li>Collect or harvest any information from the App or Services;</li>
              <li>Use the App to transmit any viruses, malware, or other harmful code.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              4. USER ACCOUNTS AND REGISTRATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To access certain features of the App, you may be required to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Provide accurate, current, and complete information during registration;</li>
              <li>Maintain and promptly update your account information to keep it accurate, current, and complete;</li>
              <li>Maintain the security of your account credentials and notify Company immediately of any 
              unauthorized access;</li>
              <li>Accept responsibility for all activities that occur under your account;</li>
              <li>Be at least 18 years of age or have the consent of a parent or guardian to use the App.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              5. USER CONTENT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You retain ownership of any User Content you submit through the App. However, by submitting 
              User Content, you grant Company a worldwide, royalty-free, non-exclusive, perpetual, 
              irrevocable, and sublicensable license to use, reproduce, modify, adapt, publish, translate, 
              distribute, and display such User Content in connection with the App and Services.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>You own or have the necessary rights to grant the license set forth above;</li>
              <li>Your User Content does not infringe, misappropriate, or violate any third-party rights, 
              including intellectual property rights, privacy rights, or publicity rights;</li>
              <li>Your User Content is not defamatory, libelous, obscene, pornographic, abusive, or 
              offensive;</li>
              <li>Your User Content does not violate any applicable laws or regulations.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              Company reserves the right to remove, edit, or refuse to post any User Content at its sole 
              discretion, without prior notice.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              6. INTELLECTUAL PROPERTY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The App and Services, including all content, features, functionality, design, graphics, text, 
              images, logos, icons, and software, are owned by Company or its licensors and are protected 
              by copyright, trademark, patent, trade secret, and other intellectual property laws. Except as 
              expressly provided in this Agreement, no part of the App or Services may be copied, reproduced, 
              distributed, republished, downloaded, displayed, posted, or transmitted in any form or by any 
              means without Company&apos;s prior written permission.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              7. PRIVACY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your use of the App is also governed by our Privacy Policy, which is incorporated into this 
              Agreement by reference. By using the App, you consent to the collection, use, and disclosure 
              of your information as described in the Privacy Policy. Please review our Privacy Policy 
              carefully.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              8. DISCLAIMER OF WARRANTIES
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              THE APP AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY 
              KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE. 
              COMPANY DOES NOT WARRANT THAT THE APP OR SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, 
              OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              9. LIMITATION OF LIABILITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, COMPANY SHALL NOT BE LIABLE FOR ANY 
              INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS 
              OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR 
              OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OR INABILITY TO USE THE APP OR SERVICES.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              IN NO EVENT SHALL COMPANY&apos;S TOTAL LIABILITY TO YOU FOR ALL DAMAGES EXCEED THE AMOUNT YOU 
              PAID TO COMPANY IN THE TWELVE (12) MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY, 
              OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              10. INDEMNIFICATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to indemnify, defend, and hold harmless Company, its affiliates, officers, directors, 
              employees, agents, licensors, and suppliers from and against any claims, liabilities, damages, 
              losses, costs, expenses, or fees (including reasonable attorneys&apos; fees) arising out of or 
              relating to:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
              <li>Your use of the App or Services;</li>
              <li>Your violation of this Agreement;</li>
              <li>Your violation of any third-party rights, including intellectual property rights or privacy 
              rights;</li>
              <li>Your User Content.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              11. TERMINATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Company may terminate or suspend your access to the App and Services at any time, with or 
              without cause or notice, for any reason, including if you breach this Agreement. Upon 
              termination, your right to use the App will immediately cease, and you must delete the App 
              from your device.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may terminate this Agreement at any time by deleting the App from your device and 
              discontinuing your use of the Services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              12. GOVERNING LAW AND DISPUTE RESOLUTION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], 
              without regard to its conflict of law provisions. Any disputes arising out of or relating to 
              this Agreement or the App shall be resolved through binding arbitration in accordance with the 
              rules of [Arbitration Organization], except where prohibited by law.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              13. CHANGES TO THIS AGREEMENT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Company reserves the right to modify this Agreement at any time. We will notify you of any 
              material changes by posting the updated Agreement in the App or by other reasonable means. 
              Your continued use of the App after such modifications constitutes your acceptance of the 
              updated Agreement. If you do not agree to the modifications, you must stop using the App.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              14. SEVERABILITY
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If any provision of this Agreement is found to be invalid, illegal, or unenforceable, the 
              remaining provisions shall continue in full force and effect.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              15. ENTIRE AGREEMENT
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This Agreement, together with the Privacy Policy and any other legal notices published by 
              Company in the App, constitutes the entire agreement between you and Company regarding your 
              use of the App and Services and supersedes all prior agreements and understandings.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#00419c' }}>
              16. CONTACT INFORMATION
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have any questions about this Agreement, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> support@cribeasyapp.com
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> [Company Address]
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500 text-center">
                By using the CribEasy App, you acknowledge that you have read, understood, and agree to be 
                bound by this End User License Agreement.
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

