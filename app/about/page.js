import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Target, Zap, Heart, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Lime Green Studios - Product Development Agency",
  description:
    "Learn about Lime Green Studios, a product development agency helping founders ship products in 4 weeks. Our mission, values, and approach to building great products.",
  keywords: [
    "about lime green studios",
    "product development agency",
    "software development team",
    "startup development agency",
  ],
  openGraph: {
    title: "About Lime Green Studios",
    description:
      "We help founders build and ship products in 4 weeks. Learn about our mission and approach.",
    type: "website",
    url: "https://limegreen.studio/about",
  },
  alternates: {
    canonical: "https://limegreen.studio/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const values = [
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description:
      "We ship fast, but never at the expense of quality. Our 4-week process is designed to deliver production-ready products, not prototypes.",
  },
  {
    icon: Target,
    title: "Outcomes Over Outputs",
    description:
      "We don't measure success by lines of code. We measure it by whether your product solves real problems for real users.",
  },
  {
    icon: Heart,
    title: "Partner, Not Vendor",
    description:
      "We're not just a dev shop. We challenge assumptions, share honest feedback, and act like your technical co-founder.",
  },
  {
    icon: Users,
    title: "User-First Always",
    description:
      "Every decision starts with the user. We build for people, not for tech trends or resume padding.",
  },
];

const stats = [
  { value: "15+", label: "Products Shipped" },
  { value: "4 Weeks", label: "Average Launch Time" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "2019", label: "Founded" },
];

export default function AboutPage() {
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-semibold mb-6">
            Est. 2019
          </div>
          <h1 className="font-coolvetica text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Help Founders{" "}
            <span className="bg-gradient-to-r from-lime-400 to-lime-200 text-gray-900 px-4 py-2 inline-block rounded-lg">
              Ship Products
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Lime Green Studios is a product development agency on a mission: to
            help founders build and launch products in 4 weeks, not 4 months.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-lime-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
            <p>
              Lime Green Studios was born out of frustration. We saw too many
              great ideas die in the "planning phase." Too many founders stuck
              in endless cycles of pitching to investors without a product. Too
              many agencies quoting 6-month timelines for an MVP.
            </p>
            <p>
              We knew there had to be a better way. So we built one.
            </p>
            <p>
              Our 4-week sprint process is the result of years of building
              products—both as founders ourselves and for clients. We've learned
              what works, what doesn't, and how to cut through the noise to
              build products that actually matter.
            </p>
            <p>
              Today, we work with founders across India and globally to turn
              ideas into launched products. From SaaS platforms to AI tools,
              marketplaces to enterprise systems—if it can be built in 4 weeks,
              we'll ship it.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Approach
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Research First
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We don't start coding on day one. We start by understanding your
                users, validating assumptions, and defining the core problem
                we're solving. This saves months of building the wrong thing.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Design for Clarity
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every pixel is intentional. We design interfaces that are
                beautiful, yes—but more importantly, they're clear, intuitive,
                and conversion-focused.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build for Scale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We use modern, battle-tested technologies that can grow with
                your product. Your MVP should be production-ready from day one,
                not something you'll need to rebuild in 6 months.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ship and Iterate
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Perfect is the enemy of done. We ship early, gather feedback,
                and iterate based on real user data—not assumptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 md:px-12 lg:px-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Tech Stack
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We use modern, production-ready technologies that scale with your
            product.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Next.js",
              "React",
              "Node.js",
              "PostgreSQL",
              "MongoDB",
              "Python",
              "FastAPI",
              "TailwindCSS",
              "TypeScript",
              "AWS",
              "Vercel",
              "Docker",
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl text-center font-semibold text-gray-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-coolvetica text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Based in Tamil Nadu, Serving the World
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We're proudly based in Tamil Nadu, India, but we work with founders
            and startups across the globe. Remote-first, collaboration-focused.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 lg:px-16 bg-gradient-to-br from-lime-500 to-lime-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="font-coolvetica text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something Great
          </h2>
          <p className="text-xl mb-8 text-lime-50">
            Have an idea? Let's turn it into a product in 4 weeks.
          </p>
          <Link
            href="https://cal.com/limegreen.studio/discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-lime-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
