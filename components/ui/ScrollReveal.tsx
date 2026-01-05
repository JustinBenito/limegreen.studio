"use client";

import React, { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "framer-motion";

/* -------------------------------------------------
   Types
-------------------------------------------------- */

type RevealItem =
    | {
        type: "word";
        text: string;
        key: string;
    }
    | {
        type: "element";
        node: React.ReactNode;
        key: string;
    };

/* -------------------------------------------------
   Flatten children while preserving <br /> & elements
-------------------------------------------------- */

function flattenChildren(children: React.ReactNode): RevealItem[] {
    const items: RevealItem[] = [];
    let index = 0;

    React.Children.forEach(children, (child) => {
        if (typeof child === "string") {
            child.split(" ").forEach((word) => {
                if (!word.trim()) return;
                items.push({
                    type: "word",
                    text: word,
                    key: `w-${index++}`,
                });
            });
        } else {
            items.push({
                type: "element",
                node: child,
                key: `e-${index++}`,
            });
        }
    });

    return items;
}

/* -------------------------------------------------
   Word component
-------------------------------------------------- */

const Word: React.FC<{
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}> = ({ children, progress, range }) => {
    const opacity = useTransform(progress, range, [0.65, 1]);
    const y = useTransform(progress, range, [4, 0]);
    const color = useTransform(
        progress,
        range,
        ["#e0e0e0", "#111111"]
    );

    return (
        <motion.span
            style={{
                opacity,
                y,
                color,
                willChange: "opacity, transform, color",
            }}
            className="inline-block mr-[0.35em]"
        >
            {children}
        </motion.span>
    );
};

/* -------------------------------------------------
   Main component
-------------------------------------------------- */

export default function ScrollReveal({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);

    const items = flattenChildren(children);
    const words = items.filter((i) => i.type === "word");

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 90%", "end 30%"],
    });

    const SPEED = 7;

    return (
        <div ref={ref} className={`max-w-5xl mx-auto ${className}`}>
            <p className="text-balance leading-[1.15] text-center">
                {items.map((item) => {
                    if (item.type === "element") {
                        return (
                            <React.Fragment key={item.key}>
                                {item.node}
                            </React.Fragment>
                        );
                    }

                    const wordIndex = words.findIndex(
                        (w) => w.key === item.key
                    );

                    const start = wordIndex / words.length;
                    const span = 1 / words.length / SPEED;

                    return (
                        <Word
                            key={item.key}
                            progress={scrollYProgress}
                            range={[start, start + span]}
                        >
                            {item.text}
                        </Word>
                    );
                })}
            </p>
        </div>
    );
}
