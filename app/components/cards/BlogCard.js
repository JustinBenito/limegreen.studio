import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BlogCard({
  slug,
  title,
  description,
  date,
  tags = [],
  image,
}) {
  return (
    <Link
      href={`/blogs/${slug}`}
      className="group flex flex-col h-full bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 ease-out"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-50 border-b border-gray-50">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          /* Empty Placeholder */
          <div className="w-full h-full bg-white" />
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-grow p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-lime-600 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Footer: Date & Link */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-dashed border-gray-100">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>

          <div className="flex items-center gap-1 text-sm font-semibold text-gray-900 group-hover:text-lime-600 transition-colors">
            Read more
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
