import React from 'react';

/**
 * BackendIllustration (Server Component)
 *
 * Etched wireframe depicting APIs & databases — cylindrical database
 * nodes, data-flow connection lines, abstract server rack, and branching
 * logic tree. Stroke-only, themed via currentColor.
 */
export function BackendIllustration(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Background dots grid ── */}
            <g className="opacity-[0.06]" strokeWidth="0">
                {Array.from({ length: 8 }, (_, row) =>
                    Array.from({ length: 8 }, (_, col) => (
                        <circle
                            key={`${row}-${col}`}
                            cx={28 + col * 22}
                            cy={28 + row * 22}
                            r="1"
                            fill="currentColor"
                        />
                    ))
                )}
            </g>

            {/* ── Primary database cylinder ── */}
            <g className="opacity-50" strokeWidth="1.5">
                {/* Top ellipse */}
                <ellipse cx="65" cy="55" rx="30" ry="10" />
                {/* Body */}
                <line x1="35" y1="55" x2="35" y2="95" />
                <line x1="95" y1="55" x2="95" y2="95" />
                {/* Bottom ellipse */}
                <ellipse cx="65" cy="95" rx="30" ry="10" />
                {/* Internal data rows */}
                <line x1="42" y1="70" x2="88" y2="70" />
                <line x1="42" y1="80" x2="78" y2="80" />
            </g>

            {/* ── Secondary database (smaller, behind) ── */}
            <g className="opacity-20" strokeWidth="1">
                <ellipse cx="150" cy="45" rx="22" ry="8" />
                <line x1="128" y1="45" x2="128" y2="75" />
                <line x1="172" y1="45" x2="172" y2="75" />
                <ellipse cx="150" cy="75" rx="22" ry="8" />
            </g>

            {/* ── Data-flow connection lines ── */}
            <g className="opacity-35" strokeWidth="1" strokeDasharray="4 4">
                {/* Primary DB → Secondary DB */}
                <path d="M95 70 L128 58" />
                {/* Primary DB → Server rack */}
                <path d="M65 105 L65 130" />
                {/* Secondary DB → Server */}
                <path d="M150 83 L150 130 L95 145" />
            </g>

            {/* ── Flow node dots ── */}
            <g className="opacity-50" strokeWidth="1.5">
                <circle cx="95" cy="70" r="3" />
                <circle cx="128" cy="58" r="3" />
                <circle cx="65" cy="130" r="3" />
            </g>

            {/* ── Abstract server rack ── */}
            <g className="opacity-40" strokeWidth="1.5">
                <rect x="35" y="135" width="60" height="42" rx="4" />
                {/* Rack shelves */}
                <line x1="35" y1="149" x2="95" y2="149" />
                <line x1="35" y1="163" x2="95" y2="163" />
                {/* Status indicators */}
                <circle cx="45" cy="142" r="2" />
                <circle cx="45" cy="156" r="2" />
                <circle cx="45" cy="170" r="2" />
                {/* Drive bays */}
                <rect x="55" y="138" width="30" height="5" rx="1.5" />
                <rect x="55" y="152" width="30" height="5" rx="1.5" />
                <rect x="55" y="166" width="24" height="5" rx="1.5" />
            </g>

            {/* ── Branching logic tree ── */}
            <g className="opacity-25" strokeWidth="1">
                <line x1="140" y1="105" x2="140" y2="120" />
                <line x1="140" y1="120" x2="120" y2="140" />
                <line x1="140" y1="120" x2="160" y2="140" />
                <line x1="120" y1="140" x2="110" y2="155" />
                <line x1="120" y1="140" x2="130" y2="155" />
                <line x1="160" y1="140" x2="155" y2="155" />
                <line x1="160" y1="140" x2="170" y2="155" />
                {/* Leaf nodes */}
                <circle cx="110" cy="158" r="2.5" />
                <circle cx="130" cy="158" r="2.5" />
                <circle cx="155" cy="158" r="2.5" />
                <circle cx="170" cy="158" r="2.5" />
                {/* Root node */}
                <circle cx="140" cy="103" r="3" />
            </g>
        </svg>
    );
}
