import { getAllBlogs } from "@/lib/blog";
import Link from "next/link";

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div className="max-w-5xl mx-auto py-20">
      <h1 className="text-4xl font-semibold mb-12">Blog</h1>

      <div className="space-y-10">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block border-b pb-6"
          >
            <h2 className="text-2xl font-medium">{blog.title}</h2>
            <p className="text-gray-500 mt-2">{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
