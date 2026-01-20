import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ArrowRight } from "lucide-react";
import {
  getAllSolutions,
  getSolutionBySlug,
  getRelatedSolutions,
  getSolutionCaseStudies,
  generateSolutionMetadata,
} from "@/lib/solutions";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
  formatStructuredData,
} from "@/lib/seo";

// Generate static paths for all solutions at build time
export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Lime Green Studios",
    };
  }

  return generateSolutionMetadata(solution);
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const relatedSolutions = getRelatedSolutions(slug);
  const caseStudies = getSolutionCaseStudies(slug);

  // Generate structured data
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://limegreen.studio" },
    { name: "Solutions", url: "https://limegreen.studio/solutions" },
    { name: solution.name, url: `https://limegreen.studio/solutions/${slug}` },
  ]);

  const serviceSchema = generateServiceSchema(solution);
  const faqSchema = generateFAQSchema(solution.faqs);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={formatStructuredData(breadcrumbSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={formatStructuredData(serviceSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={formatStructuredData(faqSchema)}
      />

      <div className="bg-white min-h-screen">
        {/* Back Button */}
        <div className="pt-12 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 px-5 py-2 bg-white border border-lime-200 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 text-lime-500" />
              <span className="text-sm font-medium text-gray-700">
                Back to Home
              </span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pt-16 pb-20 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-coolvetica text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {solution.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              {solution.heroSubheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#start-shipping"
                className="inline-flex items-center justify-center px-8 py-4 bg-lime-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-lime-600/20 hover:bg-lime-700 hover:scale-[1.02] transition-all duration-300"
              >
                {solution.cta.primary}
              </Link>
              {caseStudies.length > 0 && (
                <Link
                  href="/blogs"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-semibold text-lg hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300"
                >
                  {solution.cta.secondary}
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Challenges We Solve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {solution.painPoints.map((point, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{point.description}</p>
                  <div className="border-t border-lime-200 pt-4">
                    <p className="text-sm font-semibold text-lime-600 mb-2">
                      Our Solution:
                    </p>
                    <p className="text-gray-700">{point.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-6 md:px-12 lg:px-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What You Get
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-lime-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Our 4-Week Process
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {solution.process.overview}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.process.steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-sm font-bold text-lime-600 mb-2">
                    {step.week}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="space-y-2">
                    {step.deliverables.map((deliverable, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">
                          {deliverable}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        {caseStudies.length > 0 && (
          <section className="py-16 px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => (
                  <Link
                    key={caseStudy.slug}
                    href={`/blogs/${caseStudy.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">
                        {caseStudy.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {solution.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Solutions */}
        {relatedSolutions.length > 0 && (
          <section className="py-16 px-6 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Related Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedSolutions.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/solutions/${related.slug}`}
                    className="group p-6 bg-white border border-gray-100 rounded-xl hover:border-lime-400 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{related.tagline}</p>
                    <div className="flex items-center text-lime-600 font-semibold">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-lime-500 to-lime-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="font-coolvetica text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Your Product?
            </h2>
            <p className="text-xl mb-8 text-lime-50">
              Let's turn your idea into reality in just 4 weeks.
            </p>
            <Link
              href="/#start-shipping"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-lime-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
