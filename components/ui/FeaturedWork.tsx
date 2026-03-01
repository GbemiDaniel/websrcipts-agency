import React from "react";
import Link from "next/link";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedWork() {
    return (
        <section className="container mx-auto px-6 py-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-3">Featured Deployments</h2>
                    <p className="text-base text-muted leading-relaxed max-w-2xl">A curated selection of elite engineering capabilities mapping frontend UI to heavy database loads.</p>
                </div>
                <Link href="/work" className="text-accent-dev font-medium hover:text-primary transition-colors whitespace-nowrap">
                    View all work -&gt;
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProjectCard
                    title="Predictive Analytics Engine"
                    category="Web3 & Machine Learning"
                    description="Engineered a resilient high-frequency dashboard analyzing vast volumes of segmented user telemetry and block-state data."
                    href="/work/case-study"
                />
                <ProjectCard
                    title="Decentralized Exchange UI"
                    category="DeFi Application"
                    description="Built a heavily optimized React front-end processing real-time ledger updates at 60fps across highly variable network conditions."
                    href="/work/case-study"
                />
            </div>
        </section>
    );
}
