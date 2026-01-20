import { getAllBlogs } from "@/lib/blog";
import CaseStudiesClient from "./CaseStudiesClient";

export default function CaseStudiesPage() {
  const blogs = getAllBlogs();

  return <CaseStudiesClient blogs={blogs} />;
}
