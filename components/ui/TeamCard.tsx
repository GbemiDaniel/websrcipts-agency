import React from "react";
import { HardwareCard } from "@/components/ui/HardwareCard";
import { Spotlight } from "@/components/ui/Spotlight";

interface TeamCardProps {
    name: string;
    role: string;
    description: string;
    glowColor: string;
}

export function TeamCard({ name, role, description, glowColor }: TeamCardProps) {
    return (
        <HardwareCard className="p-6 relative overflow-hidden flex flex-col h-full group hover:border-border-soft transition-colors cursor-pointer">
            {/* Spotlight integration per requirements */}
            <Spotlight size="150px" color={glowColor} position={{ top: "-20%", right: "-10%" }} />

            {/* Avatar Placeholder */}
            <div className="w-20 h-20 rounded-full bg-surface-strong border border-border-soft mb-6 relative z-10 shrink-0" />

            {/* Typography */}
            <h3 className="text-xl font-bold text-primary relative z-10">
                {name}
            </h3>
            <span className="text-sm font-semibold text-accent-dev uppercase tracking-widest mb-4 block relative z-10">
                {role}
            </span>
            <p className="text-sm text-muted relative z-10 grow">
                {description}
            </p>
        </HardwareCard>
    );
}
