"use client";

import React from 'react';
import { PremiumFeatureCard } from './PremiumFeatureCard';
import { FrontendIllustration } from '../illustrations/FrontendIllustration';
import { BackendIllustration } from '../illustrations/BackendIllustration';
import { FullstackIllustration } from '../illustrations/FullstackIllustration';
import { MobileIllustration } from '../illustrations/MobileIllustration';

/**
 * Service data with SVG illustration components as Graphic slots.
 * Each entry maps directly to a PremiumFeatureCard.
 */
const SERVICES_DATA = [
    {
        title: "Frontend & UI/UX",
        description:
            "Pixel-perfect React and Next.js interfaces engineered for sub-second load times.",
        Graphic: FrontendIllustration,
    },
    {
        title: "Backend Systems",
        description:
            "Robust API architectures, database management, and secure server logic.",
        Graphic: BackendIllustration,
    },
    {
        title: "Fullstack Solutions",
        description:
            "End-to-end web applications bridging cutting-edge interfaces with powerful data processing.",
        Graphic: FullstackIllustration,
    },
    {
        title: "Mobile App Dev",
        description:
            "High-performance native and cross-platform mobile experiences.",
        Graphic: MobileIllustration,
    },
];

export function ServiceGrid() {
    return (
        <section className="container mx-auto px-6 z-10 relative max-w-6xl mt-32">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4 text-center">
                Services we provide
            </h2>
            <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto text-center mb-12">
                Full-spectrum engineering capabilities, from pixel-perfect interfaces to resilient backend infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                {SERVICES_DATA.map((service, index) => (
                    <PremiumFeatureCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        Graphic={service.Graphic}
                        className="h-full"
                    />
                ))}
            </div>
        </section>
    );
}
