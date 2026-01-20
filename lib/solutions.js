import fs from "fs";
import path from "path";
import { getAllBlogs } from "./blog";

const SOLUTIONS_PATH = path.join(process.cwd(), "data/solutions.json");

/**
 * Get all solution pages
 * @returns {Array} Array of all solution objects
 */
export function getAllSolutions() {
  const fileContents = fs.readFileSync(SOLUTIONS_PATH, "utf8");
  const solutions = JSON.parse(fileContents);
  return solutions;
}

/**
 * Get a single solution by slug
 * @param {string} slug - The solution slug
 * @returns {Object|null} Solution object or null if not found
 */
export function getSolutionBySlug(slug) {
  const solutions = getAllSolutions();
  return solutions.find((solution) => solution.slug === slug) || null;
}

/**
 * Get related solutions for a given solution
 * @param {string} slug - The current solution slug
 * @returns {Array} Array of related solution objects
 */
export function getRelatedSolutions(slug) {
  const currentSolution = getSolutionBySlug(slug);
  if (!currentSolution || !currentSolution.relatedSolutions) {
    return [];
  }

  const allSolutions = getAllSolutions();
  return currentSolution.relatedSolutions
    .map((relatedSlug) =>
      allSolutions.find((solution) => solution.slug === relatedSlug)
    )
    .filter(Boolean);
}

/**
 * Get case studies (blog posts) for a solution
 * @param {string} slug - The solution slug
 * @returns {Array} Array of blog post objects
 */
export function getSolutionCaseStudies(slug) {
  const solution = getSolutionBySlug(slug);
  if (!solution || !solution.caseStudies || solution.caseStudies.length === 0) {
    return [];
  }

  const allBlogs = getAllBlogs();
  return solution.caseStudies
    .map((caseStudySlug) =>
      allBlogs.find((blog) => blog.slug === caseStudySlug)
    )
    .filter(Boolean);
}

/**
 * Get solution categories/tiers
 * @returns {Object} Object with tier1 and tier2 solutions
 */
export function getSolutionsByTier() {
  const allSolutions = getAllSolutions();

  const tier1Slugs = [
    "product-development-agency",
    "software-development-agency",
    "ai-development-agency",
    "software-product-studio",
  ];

  const tier1 = allSolutions.filter((solution) =>
    tier1Slugs.includes(solution.slug)
  );
  const tier2 = allSolutions.filter(
    (solution) => !tier1Slugs.includes(solution.slug)
  );

  return { tier1, tier2 };
}

/**
 * Generate metadata for SEO
 * @param {Object} solution - The solution object
 * @returns {Object} Next.js metadata object
 */
export function generateSolutionMetadata(solution) {
  if (!solution) return {};

  return {
    title: solution.title,
    description: solution.metaDescription,
    keywords: solution.keywords?.join(", "),
    openGraph: {
      title: solution.title,
      description: solution.metaDescription,
      type: "website",
      url: `https://limegreen.studio/solutions/${solution.slug}`,
      images: [
        {
          url: `/og-images/${solution.slug}.png`,
          width: 1200,
          height: 630,
          alt: solution.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.metaDescription,
      images: [`/og-images/${solution.slug}.png`],
    },
    alternates: {
      canonical: `https://limegreen.studio/solutions/${solution.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
