import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Lime Green Studio",
  description: "Privacy Policy for Lime Green Studio - How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <main className="flex-grow pt-12 pb-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home Button */}
          <div className="flex justify-center mb-16 -ml-40 md:-ml-64">
            <Link
              href="/"
              className="group flex items-center gap-4 px-5 py-2 bg-white border border-lime-200 rounded-full shadow-xl shadow-lime-900/5 transition-all duration-500 ease-out"
            >
              <ArrowLeft className="w-4 h-4 text-lime-500 -translate-x-1 transition-all duration-500" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-lime-600 uppercase tracking-widest leading-none mb-1 transition-colors duration-500">
                  Return to
                </span>
                <span className="text-sm font-coolvetica font-bold text-gray-900 leading-none">
                  Home Page
                </span>
              </div>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-lime-50 transition-colors duration-500">
                <Image
                  src="/LGS.svg"
                  alt="Lime Green Studio"
                  width={24}
                  height={24}
                  className="relative z-10"
                />
                <div className="absolute inset-0 rounded-full bg-lime-400/10 transition-colors duration-500" />
              </div>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-coolvetica text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Privacy <span className="text-lime-600">Policy</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Last updated: January 20, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lime Green Studio ("we," "our," or "us") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Personal Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide
                to us when you:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                <li>Contact us through our website</li>
                <li>Subscribe to our newsletter</li>
                <li>Request information about our services</li>
                <li>Engage with our product development services</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Company name and position</li>
                <li>Project requirements and preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain
                information about your device, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Deliver our services and communicate about projects</li>
                <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Information Sharing and Disclosure
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information only in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Service Providers:</strong> We may share information
                  with trusted third-party service providers who assist us in
                  operating our website and delivering our services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose information
                  if required by law or in response to valid legal requests
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of assets, your information may be
                  transferred
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Data Security
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We implement appropriate technical and organizational security
                measures to protect your personal information from unauthorized
                access, disclosure, alteration, or destruction. However, no method
                of transmission over the internet or electronic storage is 100%
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may use cookies and similar tracking technologies to enhance
                your experience on our website. You can control cookies through
                your browser settings. Please note that disabling cookies may
                affect the functionality of our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding
                your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to request deletion of your information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                To exercise these rights, please contact us at{" "}
                <a
                  href="mailto:contact@limegreen.studio"
                  className="text-lime-600 hover:text-lime-700"
                >
                  contact@limegreen.studio
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Links
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices of these websites. We
                encourage you to read their privacy policies before providing any
                personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not directed to individuals under the age of 18.
                We do not knowingly collect personal information from children. If
                you believe we have collected information from a child, please
                contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date. We encourage you
                to review this Privacy Policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our
                privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-900 font-semibold mb-2">
                  Lime Green Studio
                </p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:contact@limegreen.studio"
                    className="text-lime-600 hover:text-lime-700"
                  >
                    contact@limegreen.studio
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
