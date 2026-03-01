"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface PremiumFeatureCardProps {
    /** Card headline — e.g. "Brand Identity & Logo Design" */
    title: string;
    /** Supporting copy beneath the title */
    description: string;
    /** Optional graphic component rendered in the bottom-right anchor zone */
    Graphic?: React.ComponentType<{ className?: string }>;
    /** Additional Tailwind classes merged onto the outer container */
    className?: string;
}

/**
 * PremiumFeatureCard
 *
 * A glassmorphic card with hybrid hover (desktop) + scroll (mobile)
 * accent animations. Uses Framer Motion variants: on activation, the
 * card lifts and the SVG slot illuminates from muted to primary.
 *
 * "use client" required for Framer Motion.
 */
export function PremiumFeatureCard({
    title,
    description,
    Graphic,
    className = '',
}: PremiumFeatureCardProps) {
    return (
        <motion.div
            className={`premium-glass group relative overflow-hidden rounded-2xl p-8 min-h-[340px] flex flex-col cursor-pointer ${className}`}
            initial="idle"
            whileHover="active"
            whileInView="active"
            viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
            variants={{
                idle: { y: 0 },
                active: { y: -4 },
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >
            {/* ── Text layer — z-20 keeps it crisp above all decorative layers ── */}
            <div className="relative z-20">
                <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
                    {title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                    {description}
                </p>
            </div>

            {/* ── Graphic slot — bottom-right anchor, accent on interaction ── */}
            {Graphic && (
                <div
                    className="absolute bottom-0 right-0 z-10 w-2/3 h-2/3 pointer-events-none text-foreground/20 group-hover:text-primary transition-colors duration-500"
                    aria-hidden="true"
                >
                    <Graphic className="w-full h-full" />
                </div>
            )}
        </motion.div>
    );
}
