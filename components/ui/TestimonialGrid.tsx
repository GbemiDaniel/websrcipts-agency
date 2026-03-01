import React from "react";
import { HardwareCard } from "@/components/ui/HardwareCard";
import { Quote } from "lucide-react";

export function TestimonialGrid() {
    const TESTIMONIALS = [
        {
            quote: "Webscripts Agency transformed our fragmented UI layers into a cohesive Next.js command module. Sub-second load times have increased global retention.",
            name: "Alexander Voss",
            role: "CTO, Enterprise Data",
        },
        {
            quote: "Flawless mobile interactivity and robust backend bridging. Our deployment felt like handing the keys over to a strictly disciplined operations team.",
            name: "Sarah Chen",
            role: "Product Lead, Nexus AI",
        },
        {
            quote: "We brought them complicated UX architectures. They isolated the logic blocks, rebuilt the state telemetry, and handed us an absolute powerhouse UI.",
            name: "Marcus Reynolds",
            role: "Founder, DeFi Connect",
        }
    ];

    return (
        <section className="container mx-auto px-6 py-24">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Transmissions</h2>
                <p className="text-muted max-w-2xl mx-auto">Feedback from the network traversing our fully deployed applications.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t, i) => (
                    <HardwareCard key={i} className="p-8 flex flex-col gap-6 relative group hover:-translate-y-2 transition-transform duration-300">
                        <Quote className="w-8 h-8 text-border-soft group-hover:text-accent-dev transition-colors duration-300 absolute top-8 right-8 mix-blend-screen" />
                        <p className="text-muted italic grow relative z-10 leading-relaxed text-[15px]">
                            &quot;{t.quote}&quot;
                        </p>
                        <div className="relative z-10 border-t border-border-soft pt-6 mt-4">
                            <h4 className="text-primary font-bold text-base">{t.name}</h4>
                            <p className="text-sm text-accent-dev mt-1">{t.role}</p>
                        </div>
                    </HardwareCard>
                ))}
            </div>
        </section>
    );
}
