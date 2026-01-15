"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility, if not I'll standard clsx

type TOCItem = {
    text: string;
    id: string;
    level: number;
};

export default function TableOfContents({ toc }: { toc: TOCItem[] }) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        toc.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [toc]);

    return (
        <nav className="hidden lg:block sticky top-32 max-h-[calc(100vh-160px)] overflow-y-auto pl-4">

            {/* Visual Hierarchy: Subdued Title */}
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">
                Table of Contents
            </h4>

            {/* List: Guide line on the left */}
            <ul className="space-y-1 relative">

                {/* Continuous Guide Line (Background) */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-100" />

                {toc.map((item) => {
                    // Indentation logic: H2 (level 2) = 0, H3 (level 3) = 1
                    // Using padding-left classes doesn't work well with dynamic levels, 
                    // but we can map standard levels to Tailwind classes or keep styles.
                    // Let's use clean styles for spacing.
                    const isActive = activeId === item.id;
                    const indent = (item.level - 2) * 16 + 16; // 16px base + indent

                    return (
                        <li key={item.id} className="relative">
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({
                                        behavior: "smooth",
                                    });
                                    setActiveId(item.id);
                                }}
                                style={{ paddingLeft: `${indent}px` }}
                                className={`
                                    block py-2 pr-4 text-sm transition-all duration-300 ease-in-out border-l-2
                                    ${isActive
                                        ? "border-lime-500 text-lime-700 font-medium"
                                        : "border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-200"
                                    }
                                `}
                            >
                                {item.text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
