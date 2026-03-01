import React from 'react';
import { HardwareCard } from './HardwareCard';

const SERVICES_DATA = [
    {
        title: "Frontend & UI/UX",
        description: "Pixel-perfect React and Next.js interfaces engineered for sub-second load times.",
        glowColor: "var(--glow-dev)", // Cyan glow
        placeholderLabel: "Wireframes & Visuals"
    },
    {
        title: "Backend Systems",
        description: "Robust API architectures, database management, and secure server logic.",
        glowColor: "var(--glow-writer)", // Purple glow
        placeholderLabel: "API & Databases"
    },
    {
        title: "Fullstack Solutions",
        description: "End-to-end web applications bridging cutting-edge interfaces with powerful data processing.",
        glowColor: "var(--glow-accent)", // Accent/Amber glow
        placeholderLabel: "Full Architecture"
    },
    {
        title: "Mobile App Dev",
        description: "High-performance native and cross-platform mobile experiences.",
        glowColor: "var(--glow-dev)", // Cyan glow
        placeholderLabel: "Mobile Interfaces"
    }
];

export function ServiceGrid() {
    return (
        <section className="container mx-auto px-6 z-10 relative max-w-6xl mt-32">
            {/* Optional Section Title above the grid */}
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
                Services we provide
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
                {SERVICES_DATA.map((service, index) => (
                    <HardwareCard
                        key={index}
                        className="p-8 flex flex-col min-h-[380px] h-full"
                        glowColor={service.glowColor}
                    >
                        <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                        <p className="text-sm text-muted mb-auto">{service.description}</p>

                        {/* Visual placeholder block mimicking Pixel cards */}
                        <div className="h-40 mt-8 rounded-lg outline-dashed outline-1 outline-white/10 flex items-center justify-center text-white/20 bg-white/5">
                            {service.placeholderLabel}
                        </div>
                    </HardwareCard>
                ))}
            </div>
        </section>
    );
}
