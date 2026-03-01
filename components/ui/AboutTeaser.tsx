import React from "react";
import Link from "next/link";
import { HardwareCard } from "@/components/ui/HardwareCard";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/Button";

export function AboutTeaser() {
    return (
        <section className="container mx-auto px-6 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Visual Placeholder */}
                <HardwareCard className="aspect-square relative overflow-hidden flex items-center justify-center">
                    <Spotlight color="var(--glow-accent)" className="-translate-x-1/2 -translate-y-1/2" position={{ top: "30%", left: "30%" }} />
                    <span className="text-muted/50 font-medium tracking-widest uppercase z-10">[Team Image Placeholder]</span>
                </HardwareCard>

                {/* Right Text Content */}
                <div className="flex flex-col items-start text-left">
                    <p className="text-sm font-bold text-accent-dev uppercase tracking-widest mb-4">The Human Element</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
                        Engineered by specialists, driven by creativity.
                    </h2>
                    <p className="text-lg text-muted mb-10 max-w-xl">
                        Webskit Insights isn&apos;t just an agency; it&apos;s a full-stack collective mapping visionary ideas into pristine, bug-free, highly performant code. We bridge the gap between design philosophy and raw technical execution.
                    </p>
                    <Link href="/about">
                        <Button variant="outline" className="px-8 py-3 h-auto">
                            Meet the Team
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
