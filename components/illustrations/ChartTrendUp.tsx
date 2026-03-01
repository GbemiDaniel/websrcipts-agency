import React from 'react';

/**
 * ChartTrendUp (Server Component)
 *
 * Minimalist abstract line chart trending upwards.
 * Used for MRR, Progress, and growth-related KPIs.
 * Stroke-only, themed via currentColor.
 */
export function ChartTrendUp(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Grid lines ── */}
            <g className="opacity-[0.08]" strokeWidth="0.5">
                <line x1="30" y1="40" x2="30" y2="170" />
                <line x1="30" y1="170" x2="180" y2="170" />
                {/* Horizontal guides */}
                <line x1="30" y1="130" x2="180" y2="130" strokeDasharray="3 4" />
                <line x1="30" y1="90" x2="180" y2="90" strokeDasharray="3 4" />
                <line x1="30" y1="50" x2="180" y2="50" strokeDasharray="3 4" />
            </g>

            {/* ── Main trend line ── */}
            <g className="opacity-50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="35,150 60,140 85,125 105,110 125,85 145,70 165,45" />
            </g>

            {/* ── Data points ── */}
            <g className="opacity-40" strokeWidth="1.5">
                <circle cx="35" cy="150" r="3" />
                <circle cx="60" cy="140" r="3" />
                <circle cx="85" cy="125" r="3" />
                <circle cx="105" cy="110" r="3" />
                <circle cx="125" cy="85" r="3" />
                <circle cx="145" cy="70" r="3" />
                <circle cx="165" cy="45" r="4" />
            </g>

            {/* ── Upward arrow at the end ── */}
            <g className="opacity-35" strokeWidth="1.5" strokeLinecap="round">
                <polyline points="158,48 165,40 172,48" />
            </g>

            {/* ── Shaded area under the line (subtle) ── */}
            <g className="opacity-[0.04]">
                <polygon
                    points="35,150 60,140 85,125 105,110 125,85 145,70 165,45 165,170 35,170"
                    fill="currentColor"
                    stroke="none"
                />
            </g>
        </svg>
    );
}
