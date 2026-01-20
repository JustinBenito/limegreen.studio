import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, Zap, Clock, DollarSign, Users } from "lucide-react";

export const metadata = {
  title: "MVP Development | Build Your Minimum Viable Product in 4 Weeks",
  description:
    "Expert MVP development services. We build and launch your minimum viable product in just 4 weeks. Fast, affordable, and focused on user validation.",
  keywords: [
    "MVP development",
    "minimum viable product",
    "MVP development services",
    "build MVP",
    "MVP development company",
    "startup MVP development",
    "fast MVP development",
  ],
  openGraph: {
    title: "MVP Development in 4 Weeks | Lime Green Studios",
    description:
      "Turn your idea into a working product in 4 weeks. Expert MVP development for startups.",
    type: "website",
    url: "https://limegreen.studio/mvp-development",
  },
  alternates: {
    canonical: "https://limegreen.studio/mvp-development",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const features = [
  {
    icon: Clock,
    title: "Ship in 4 Weeks",
    description:
      "Our proven sprint process takes you from idea to launched MVP in just one month.",
  },
  {
    icon: DollarSign,
    title: "Fixed Price",
    description:
      "No surprises. One transparent price for your entire MVP development project.",
  },
  {
    icon: Users,
    title: "User-Focused",
    description:
      "We build MVPs that test real assumptions with real users—not bloated feature lists.",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description:
      "We use battle-tested technologies that scale with your product as it grows.",
  },
];

const process = [
  {
    week: "Week 1",
    title: "Research & Planning",
    tasks: [
      "User research & validation",
      "Feature prioritization (must-have vs nice-to-have)",
      "Technical architecture design",
      "UI/UX wireframes",
    ],
  },
  {
    week: "Week 2",
    title: "Design & Setup",
    tasks: [
      "High-fidelity UI design",
      "Brand identity & style guide",
      "Development environment setup",
      "Database schema design",
    ],
  },
  {
    week: "Week 3",
    title: "Development",
    tasks: [
      "Core feature development",
      "API & backend implementation",
      "Frontend development",
      "Integration & testing",
    ],
  },
  {
    week: "Week 4",
    title: "Launch",
    tasks: [
      "Bug fixes & polish",
      "Deployment to production",
      "User onboarding flows",
      "Analytics & monitoring setup",
    ],
  },
];

const faqs = [
  {
    question: "What exactly is an MVP?",
    answer:
      "A Minimum Viable Product (MVP) is the simplest version of your product that solves the core problem for your users. It has just enough features to validate your idea with real users and gather feedback—without wasting time and money on features you don't need yet.",
  },
  {
    question: "Can you really build an MVP in 4 weeks?",
    answer:
      "Yes! By focusing ruthlessly on core features and using our proven sprint methodology, we ship production-ready MVPs in 4 weeks. We've done it for SaaS products, marketplaces, AI tools, and more. The key is smart prioritization and no feature bloat.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "That's expected! MVPs are meant to evolve based on user feedback. We offer post-launch support and can continue working with you to iterate on your product based on what you learn from real users.",
  },
  {
    question: "How is this different from your Product Development service?",
    answer:
      "MVP Development is laser-focused on speed and validation. We build the absolute minimum to test your core hypothesis. Product Development is more comprehensive—it includes deeper market research, more robust features, and longer-term product strategy.",
  },
  {
    question: "What technologies do you use for MVP development?",
    answer:
      "We typically use Next.js for frontend, Node.js for backend, PostgreSQL for database, and deploy on Vercel or AWS. But we adapt based on your specific needs. The goal is always to use proven, scalable technologies that won't hold you back as you grow.",
  },
];

export default function MVPDevelopmentPage() {
  return (
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
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Ship Your MVP in 4 Weeks
            </div>
            <h1 className="font-coolvetica text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Turn Your Idea Into a{" "}
              <span className="bg-gradient-to-r from-lime-400 to-lime-200 text-gray-900 px-4 py-2 inline-block rounded-lg">
                Working Product
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Don't spend months building features nobody wants. We help you
              build and launch a focused MVP in 4 weeks—so you can start
              learning from real users, fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#start-shipping"
                className="inline-flex items-center justify-center px-8 py-4 bg-lime-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-lime-600/20 hover:bg-lime-700 hover:scale-[1.02] transition-all duration-300"
              >
                Start Your MVP Project
              </Link>
              <Link
                href="/blogs"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-900 rounded-2xl font-semibold text-lg hover:bg-gray-200 hover:scale-[1.02] transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Us for MVP Development
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-lime-600" />
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

      {/* 4-Week Process */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Our 4-Week MVP Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            A battle-tested sprint methodology that takes you from zero to
            launch in one month.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((week, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="text-sm font-bold text-lime-600 mb-2">
                  {week.week}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {week.title}
                </h3>
                <ul className="space-y-2">
                  {week.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What's Included
          </h2>
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "User research & validation",
                "Product roadmap & feature prioritization",
                "UI/UX design (Figma)",
                "Full-stack development",
                "Responsive web & mobile design",
                "Database design & setup",
                "Authentication & user management",
                "Deployment & hosting setup",
                "Analytics & monitoring",
                "2 weeks post-launch support",
                "Source code & documentation",
                "Training & handoff session",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-sm"
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

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-lime-500 to-lime-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-coolvetica text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your MVP?
          </h2>
          <p className="text-xl mb-8 text-lime-50">
            Let's validate your idea with real users in just 4 weeks.
          </p>
          <Link
            href="/#start-shipping"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-lime-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Start Your MVP Project
          </Link>
        </div>
      </section>
    </div>
  );
}
