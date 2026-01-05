import { getBlogBySlug, getAllBlogs } from "@/lib/blogs";
import { MDXRemote } from "next-mdx-remote/rsc";
import { extractTOC } from "@/lib/toc";

/* ---------------------------------------------
   Generate static routes
---------------------------------------------- */
export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({
    slug: blog.slug,
  }));
}

/* ---------------------------------------------
   MDX components (STEP 8 goes HERE)
---------------------------------------------- */
const components = {
  h2: ({ children }) => {
    const id = children?.toString().toLowerCase().replace(/\s+/g, "-");

    return (
      <h2 id={id} className="scroll-mt-24">
        {children}
      </h2>
    );
  },
};

/* ---------------------------------------------
   Blog page
---------------------------------------------- */
export default function BlogPage({ params }) {
  const { content, data } = getBlogBySlug(params.slug);
  const toc = extractTOC(content);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-[240px_1fr] gap-12 py-20">
      {/* TOC */}
      <aside className="sticky top-24 text-sm text-gray-400">
        <p className="mb-4 font-medium">ON THIS PAGE</p>
        <ul className="space-y-2">
          {toc.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="hover:text-black">
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Blog content */}
      <article className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </article>
    </div>
  );
}
