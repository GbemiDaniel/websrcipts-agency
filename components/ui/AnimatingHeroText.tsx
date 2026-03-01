"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface AnimatingHeroTextProps {
    words: string[];
    className?: string; // Optional styling for typography
}

/**
 * AnimatingHeroText (Client Component)
 * 
 * Cycles through an array of strings every 3 seconds:
 * - Uses absolute positioning inside a padded wrapper to avoid layout jumps
 * - Avoids clipping descenders like 'p' and 'g' by ensuring correct line height and padding
 * - Render longest word invisibly to strictly lock max-width dimensions.
 */
export function AnimatingHeroText({ words, className = '' }: AnimatingHeroTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!words || words.length <= 1) return;

        const intervalId = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [words]);

    if (!words || words.length === 0) return null;

    // Render the longest word invisibly to strictly lock the container's max width/height.
    // This prevents any jumping when short words swap with long words.
    const longestWord = [...words].sort((a, b) => b.length - a.length)[0];

    // Shared typography classes applied to both the measuring span and the animating span
    // Ensures perfect layout matching, tight mobile line height, and a single forced line on desktop
    const sharedTypography = "leading-[1.1] md:whitespace-nowrap w-full text-center";

    return (
        <div className={`relative inline-flex flex-col items-center justify-start pb-2 md:pb-4 ${className}`}>
            {/* Invisible spacer forcing exact layout footprint.
                Using block and relative ensures the container explicitly respects this height.
                Notice we do not use 'overflow-hidden' here to prevent the guillotine effect on descenders. */}
            <span className={`invisible pointer-events-none block relative text-transparent ${sharedTypography}`} aria-hidden="true">
                {longestWord}
            </span>

            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0, position: 'absolute', top: 0, left: 0 }}
                    animate={{ y: 0, opacity: 1, position: 'absolute', top: 0, left: 0 }}
                    exit={{ y: -20, opacity: 0, position: 'absolute', top: 0, left: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={sharedTypography}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </div>
    );
}
