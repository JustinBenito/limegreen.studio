import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Lime Green Studio",
  description: "Terms of Service for Lime Green Studio - Legal terms and conditions for using our services.",
};

export default function TermsOfService() {
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
              Terms of <span className="text-lime-600">Service</span>
            </h1>
            <p className="text-gray-500 text-lg">
              Last updated: January 20, 2026
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing or using Lime Green Studio's website and services,
                you agree to be bound by these Terms of Service and all
                applicable laws and regulations. If you do not agree with any of
                these terms, you are prohibited from using or accessing our
                services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Services Description
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lime Green Studio provides product development services, including
                but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Product research and validation</li>
                <li>UI/UX design and prototyping</li>
                <li>Web and mobile application development</li>
                <li>AI and machine learning integration</li>
                <li>Testing, deployment, and launch support</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any
                aspect of our services at any time without prior notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Project Engagement
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Proposal and Agreement
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                All project engagements begin with a consultation and proposal.
                Once both parties agree to the scope, timeline, and pricing, a
                formal agreement will be executed. Work will commence only after
                the agreement is signed and initial payment is received.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Client Responsibilities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Clients are responsible for:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Providing accurate and complete information about project
                  requirements
                </li>
                <li>Timely feedback and approvals at designated milestones</li>
                <li>
                  Providing necessary access to systems, accounts, or resources
                </li>
                <li>
                  Payment according to the agreed-upon schedule and terms
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Payment Terms
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Payment terms will be specified in the project agreement. Typical
                payment structures include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  Initial deposit (typically 30-50%) before project commencement
                </li>
                <li>Milestone-based payments throughout the project</li>
                <li>Final payment upon project completion</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Late payments may result in project suspension or termination.
                Additional fees may apply for overdue payments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Intellectual Property
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Client Ownership
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upon full payment, clients receive ownership of the final
                deliverables created specifically for their project. This
                includes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Custom designs and visual assets</li>
                <li>Application code developed for the project</li>
                <li>Project-specific documentation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">
                Studio Retention
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Lime Green Studio retains ownership of:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Pre-existing intellectual property and tools</li>
                <li>General methodologies and processes</li>
                <li>The right to showcase the project in our portfolio</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Confidentiality
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We respect the confidential nature of client information. Any
                proprietary or sensitive information shared during the course of
                our engagement will be kept confidential and used solely for the
                purpose of delivering the agreed-upon services. If required, we
                are willing to sign a separate Non-Disclosure Agreement (NDA).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Project Timeline and Delays
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We strive to meet all agreed-upon deadlines. However, timelines
                are estimates and may be affected by:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Delays in client feedback or approvals</li>
                <li>Changes in project scope or requirements</li>
                <li>Technical challenges or third-party dependencies</li>
                <li>Force majeure events</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                We will communicate any potential delays promptly and work with
                you to adjust timelines as needed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Revisions and Changes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each project includes a specified number of revision rounds as
                outlined in the project agreement. Additional revisions or
                changes to the agreed-upon scope may result in:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Additional fees</li>
                <li>Extended timelines</li>
                <li>A revised project agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Warranties and Disclaimers
              </h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Service Warranty
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We warrant that our services will be performed in a professional
                and workmanlike manner. We will make reasonable efforts to
                correct any defects in our work brought to our attention within a
                specified warranty period (typically 30-90 days post-launch).
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Disclaimer
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our services are provided "as is" without any other warranties,
                express or implied. We do not guarantee specific business
                outcomes, user adoption rates, or revenue generation. Success
                depends on many factors beyond our control, including market
                conditions, execution, and ongoing maintenance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-600 leading-relaxed">
                To the maximum extent permitted by law, Lime Green Studio shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, including lost profits, loss
                of data, or business interruption. Our total liability shall not
                exceed the total amount paid by the client for the specific
                project in question.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Termination
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Either party may terminate a project engagement under the
                following conditions:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>By Client:</strong> With written notice. Client remains
                  responsible for payment for work completed up to the
                  termination date.
                </li>
                <li>
                  <strong>By Studio:</strong> If client fails to meet payment
                  obligations or provide necessary cooperation.
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Upon termination, we will provide all completed work to date, and
                the client will pay for all services rendered.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our projects may involve third-party services, tools, or
                platforms (e.g., hosting providers, APIs, payment processors).
                While we will assist with integration and setup, we are not
                responsible for the availability, performance, or policies of
                these third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Indemnification
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You agree to indemnify and hold Lime Green Studio harmless from
                any claims, damages, or expenses arising from your use of our
                services, your breach of these terms, or any content or
                materials you provide to us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of India. Any disputes arising from
                these terms or our services shall be subject to the exclusive
                jurisdiction of the courts in Tamil Nadu, India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to our
                website. Your continued use of our services after such changes
                constitutes acceptance of the modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact us at:
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

            <section className="mb-8">
              <p className="text-gray-500 text-sm italic">
                By using our services, you acknowledge that you have read,
                understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
