"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HardwareCard } from "@/components/ui/HardwareCard";
import { Spotlight } from "@/components/ui/Spotlight";

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
            <HardwareCard className="group hover:-translate-y-2 hover:border-accent-dev transition-all duration-300 cursor-pointer overflow-hidden flex flex-col h-full">
                {/* Visual Placeholder (Top) */}
                <div className="w-full aspect-video bg-surface-strong border-b border-border-soft relative overflow-hidden">
                    <Spotlight size="200px" color="var(--glow-dev)" className="-translate-x-1/2 -translate-y-1/2" position={{ top: "50%", left: "50%" }} />
                    {/* BACKEND TEAM: Replace src with actual database image URL */}
                    <Image
                        src="/placeholder-project.jpg"
                        alt={title}
                        fill
                        className="object-cover opacity-0 transition-opacity duration-300"
                        onLoadingComplete={(img) => img.classList.remove('opacity-0')}
                    />
                </div>

                {/* Content (Bottom) */}
                <div className="p-6 flex flex-col grow">
                    <span className="text-xs font-bold text-accent-dev uppercase tracking-wider mb-2">
                        {category}
                    </span>
                    <h3 className="text-xl font-bold text-primary mb-3">
                        {title}
                    </h3>
                    <p className="text-sm text-muted grow">
                        {description}
                    </p>
                    <Link href={href} className="text-sm font-medium text-primary group-hover:text-accent-dev transition-colors mt-6 w-max">
                        View Project -&gt;
                    </Link>
                </div>
            </HardwareCard>
        </motion.div>
    );
}
