import React, { ReactNode } from 'react';

interface PremiumStatCardProps {
    /** Metric label — renders uppercase, tracked-wide, muted */
    title: string;
    /** Primary KPI value (number, percentage, currency, etc.) */
    value: ReactNode;
    /** Optional supporting text beneath the value */
    subtext?: string;
    /** Optional micro-illustration for ambient background depth */
    Graphic?: React.ComponentType<{ className?: string }>;
    /** Additional Tailwind classes */
    className?: string;
}

/**
 * PremiumStatCard (Server Component)
 *
 * A compact, metric-focused variant of PremiumFeatureCard for dense
 * dashboard grids. Uses the `.premium-glass` utility with smaller
 * padding and rounded corners.
 */
export function PremiumStatCard({
    title,
    value,
    subtext,
    Graphic,
    className = '',
}: PremiumStatCardProps) {
    return (
        <div
            className={`premium-glass relative overflow-hidden rounded-xl p-6 flex flex-col gap-4 ${className}`}
        >
            {/* ── Text layer — z-20 keeps it crisp above decorative elements ── */}
            <div className="relative z-20">
                <h3 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
                    {title}
                </h3>
                <p className="text-3xl font-bold text-foreground">{value}</p>
                {subtext && (
                    <p className="text-sm text-muted mt-1">{subtext}</p>
                )}
            </div>

            {/* ── Graphic slot — faint ambient background decoration ── */}
            {Graphic && (
                <div
                    className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 pointer-events-none z-10"
                    aria-hidden="true"
                >
                    <Graphic className="w-full h-full" />
                </div>
            )}
        </div>
    );
}
