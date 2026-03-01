import React from 'react';

/**
 * PulseRing (Server Component)
 *
 * Concentric wireframe circles with a center dot.
 * Used for Pending Reviews / Milestones KPIs.
 * Stroke-only, themed via currentColor.
 */
export function PulseRing(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Outermost ring ── */}
            <g className="opacity-[0.08]" strokeWidth="0.75">
                <circle cx="100" cy="100" r="90" />
            </g>

            {/* ── Outer ring ── */}
            <g className="opacity-[0.12]" strokeWidth="1">
                <circle cx="100" cy="100" r="72" />
            </g>

            {/* ── Middle ring ── */}
            <g className="opacity-20" strokeWidth="1">
                <circle cx="100" cy="100" r="54" />
            </g>

            {/* ── Inner ring ── */}
            <g className="opacity-30" strokeWidth="1.5">
                <circle cx="100" cy="100" r="36" />
            </g>

            {/* ── Core ring ── */}
            <g className="opacity-40" strokeWidth="1.5">
                <circle cx="100" cy="100" r="18" />
            </g>

            {/* ── Center dot ── */}
            <g className="opacity-50" strokeWidth="2">
                <circle cx="100" cy="100" r="4" />
            </g>

            {/* ── Cross-hair alignment guides ── */}
            <g className="opacity-[0.06]" strokeWidth="0.5" strokeDasharray="4 6">
                <line x1="100" y1="8" x2="100" y2="192" />
                <line x1="8" y1="100" x2="192" y2="100" />
            </g>

            {/* ── Tick marks on the middle ring ── */}
            <g className="opacity-15" strokeWidth="1">
                <line x1="100" y1="46" x2="100" y2="38" />
                <line x1="100" y1="162" x2="100" y2="154" />
                <line x1="46" y1="100" x2="38" y2="100" />
                <line x1="162" y1="100" x2="154" y2="100" />
            </g>
        </svg>
    );
}
