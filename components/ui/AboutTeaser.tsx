import React from "react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/Button";
import { TeamWireframe } from "@/components/illustrations/TeamWireframe";

export function AboutTeaser() {
    return (
        <section className="container mx-auto px-6 py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Visual — Wireframe SVG inside premium glass */}
                <div className="premium-glass relative overflow-hidden rounded-2xl aspect-square flex items-center justify-center">
                    <Spotlight color="var(--glow-accent)" className="-translate-x-1/2 -translate-y-1/2" position={{ top: "30%", left: "30%" }} />
                    <div className="relative z-10 w-4/5 h-4/5 text-foreground/15">
                        <TeamWireframe className="w-full h-full" />
                    </div>
                </div>

                {/* Right Text Content */}
                <div className="flex flex-col items-start text-left">
                    <p className="text-sm font-bold text-accent-dev uppercase tracking-widest mb-4">The Human Element</p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tighter leading-tight mb-6">
                        Engineered by specialists, driven by creativity.
                    </h2>
                    <p className="text-base text-muted leading-relaxed max-w-2xl mb-10">
                        Webscripts Agency isn&apos;t just an agency; it&apos;s a full-stack collective mapping visionary ideas into pristine, bug-free, highly performant code. We bridge the gap between design philosophy and raw technical execution.
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
