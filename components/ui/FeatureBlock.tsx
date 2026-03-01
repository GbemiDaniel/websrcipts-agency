"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Spotlight } from "./Spotlight";
import { HardwareCard } from "./HardwareCard";
import { CheckCircle2 } from "lucide-react";

interface FeatureBlockProps {
    title: string;
    description: string;
    features: string[];
    align?: "left" | "right";
    glowColor?: string;
}

export function FeatureBlock({
    title,
    description,
    features,
    align = "left",
    glowColor = "var(--glow-dev)"
}: FeatureBlockProps) {
    const textOrderClass = align === "right" ? "lg:order-last" : "";
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            {/* Text Column */}
            <div className={`flex flex-col gap-6 ${textOrderClass}`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-tight">
                    {title}
                </h2>
                <p className="text-lg text-muted md:text-xl max-w-xl">
                    {description}
                </p>

                <ul className="flex flex-col gap-4 mt-2">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-muted">
                            <CheckCircle2 className="w-5 h-5 text-accent-dev shrink-0 mt-0.5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Visual Column */}
            <div className="relative w-full h-full min-h-[400px]">
                {/* Background Ambient Glow */}
                <Spotlight
                    color={glowColor}
                    size="500px"
                    className="opacity-40 -translate-x-1/2 -translate-y-1/2"
                    position={{ top: "50%", left: "50%" }}
                />

                <HardwareCard className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-8 z-10" glowColor={glowColor}>
                    <div className="w-full h-full border border-dashed border-white/10 bg-white/5 rounded-lg flex items-center justify-center text-white/20 text-sm">
                        UI Mockup Placeholder
                    </div>
                </HardwareCard>
            </div>
        </motion.div>
    );
}
