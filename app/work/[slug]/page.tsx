import { PageHeader } from "@/components/ui/PageHeader";
import { HardwareCard } from "@/components/ui/HardwareCard";
import { Spotlight } from "@/components/ui/Spotlight";
import React from "react";

// For Next.js 15 compatibility, standard params are asynchronous.
export default async function CaseStudy(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const slug = params.slug;

    // Parse the slug into a human-readable title
    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <main className="relative min-h-screen text-primary selection:bg-accent-dev selection:text-white pb-32">
            <PageHeader title={title || "Project Overview"} />

            {/* Tech Stack Bar */}
            <div className="w-full border-y border-border-soft bg-surface py-6 mb-16 relative z-10">
                <div className="container mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-muted">
                    <span><strong className="text-primary">Client:</strong> Enterprise Solution</span>
                    <span><strong className="text-primary">Timeline:</strong> 12 Weeks</span>
                    <span><strong className="text-primary">Tech:</strong> Next.js, Node.js, PostgreSQL</span>
                </div>
            </div>

            {/* Split Content */}
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">The Challenge</h3>
                    <p className="text-muted leading-relaxed">
                        Legacy monoliths and fractured logic layers created systemic bottlenecks. The mandate was clear: Engineer a sub-second, highly accessible digital experience. The interface required robust real-time synchronization without compromising our rigid standard for the premium hardware-glass aesthetic across every viewport.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-primary">The Architecture</h3>
                    <p className="text-muted leading-relaxed">
                        We deployed a heavily cached Next.js App Router edge environment seamlessly consuming a decentralized Node.js backend. Intelligent Framer Motion integration powers the viewport scroll physics without invoking main-thread penalties, effectively bridging heavy 3D rendering elements with elite native mobile performance standards.
                    </p>
                </div>
            </div>

            {/* Visual Anchor Placeholder */}
            <div className="container mx-auto px-6 relative z-10">
                <HardwareCard className="mt-16 w-full aspect-video flex items-center justify-center relative overflow-hidden group">
                    <Spotlight
                        color="var(--glow-dev)"
                        size="800px"
                        position={{ top: "50%", left: "50%" }}
                        className="-translate-x-1/2 -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700"
                    />
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="text-xs text-accent-dev font-bold uppercase tracking-widest">
                            Interactive Mockup
                        </span>
                        <div className="border border-border-soft bg-surface-strong/50 backdrop-blur-md px-8 py-4 rounded-xl text-primary font-medium shadow-md">
                            {title} Dashboard Rendering
                        </div>
                    </div>
                </HardwareCard>
            </div>
        </main>
    );
}
