"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { ProjectArchitecture } from "@/components/illustrations/ProjectArchitecture";

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    href: string;
}

export function ProjectCard({ title, category, description, href }: ProjectCardProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="h-full"
        >
            <div className="premium-glass group hover:-translate-y-2 hover:border-accent-dev transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full rounded-2xl">
                {/* Visual — Wireframe SVG replaces placeholder image */}
                <div className="w-full aspect-video bg-surface-strong/30 border-b border-border-soft/50 relative overflow-hidden flex items-center justify-center">
                    <Spotlight size="200px" color="var(--glow-dev)" className="-translate-x-1/2 -translate-y-1/2" position={{ top: "50%", left: "50%" }} />
                    <div className="relative z-10 w-4/5 h-4/5 text-foreground/10 group-hover:text-primary/30 transition-colors duration-500">
                        <ProjectArchitecture className="w-full h-full" />
                    </div>
                </div>

                {/* Content (Bottom) */}
                <div className="p-6 flex flex-col grow">
                    <span className="text-xs font-bold text-accent-dev uppercase tracking-widest mb-2">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground tracking-tight mb-3">
                        {title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed grow">
                        {description}
                    </p>
                    <Link href={href} className="text-sm font-medium text-primary group-hover:text-accent-dev transition-colors mt-6 w-max">
                        View Project -&gt;
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
