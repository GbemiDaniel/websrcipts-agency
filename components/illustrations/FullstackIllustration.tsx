import React from 'react';

/**
 * FullstackIllustration (Server Component)
 *
 * Etched wireframe depicting end-to-end architecture — three isometric
 * overlapping layers (front, middle, back tiers) connected by vertical
 * dotted data lines. Stroke-only, themed via currentColor.
 */
export function FullstackIllustration(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Subtle axis lines ── */}
            <g className="opacity-[0.06]" strokeWidth="0.5">
                <line x1="100" y1="10" x2="100" y2="190" />
                <line x1="10" y1="100" x2="190" y2="100" />
            </g>

            {/* ── Back tier (Data layer) ── */}
            <g className="opacity-20" strokeWidth="1">
                {/* Isometric parallelogram */}
                <path d="M55 50 L155 50 L145 75 L45 75 Z" />
                {/* Internal detail lines */}
                <line x1="65" y1="58" x2="135" y2="58" />
                <line x1="62" y1="65" x2="120" y2="65" />
                {/* Data node dots */}
                <circle cx="80" cy="62" r="2" />
                <circle cx="110" cy="62" r="2" />
            </g>

            {/* ── Middle tier (Logic / API layer) ── */}
            <g className="opacity-40" strokeWidth="1.5">
                <path d="M50 85 L150 85 L140 115 L40 115 Z" />
                {/* Gear / process indicators */}
                <circle cx="75" cy="100" r="8" />
                <circle cx="75" cy="100" r="3" />
                <circle cx="115" cy="100" r="8" />
                <circle cx="115" cy="100" r="3" />
                {/* Connection between gears */}
                <line x1="83" y1="100" x2="107" y2="100" strokeDasharray="3 2" />
            </g>

            {/* ── Front tier (UI layer) ── */}
            <g className="opacity-55" strokeWidth="1.5">
                <path d="M45 125 L145 125 L135 160 L35 160 Z" />
                {/* UI skeleton blocks */}
                <rect x="50" y="132" width="35" height="8" rx="2" />
                <rect x="50" y="144" width="50" height="8" rx="2" />
                <rect x="108" y="132" width="22" height="20" rx="2" />
            </g>

            {/* ── Vertical data-flow lines (dotted) ── */}
            <g className="opacity-30" strokeWidth="1" strokeDasharray="3 4">
                {/* Back → Middle */}
                <line x1="75" y1="75" x2="75" y2="85" />
                <line x1="115" y1="75" x2="115" y2="85" />
                {/* Middle → Front */}
                <line x1="75" y1="115" x2="65" y2="125" />
                <line x1="115" y1="115" x2="120" y2="125" />
            </g>

            {/* ── Flow direction arrows ── */}
            <g className="opacity-35" strokeWidth="1.5">
                {/* Down arrow left */}
                <polyline points="72,83 75,88 78,83" />
                {/* Down arrow right */}
                <polyline points="112,83 115,88 118,83" />
                {/* Down arrow left (lower) */}
                <polyline points="62,123 65,128 68,123" />
                {/* Down arrow right (lower) */}
                <polyline points="117,123 120,128 123,123" />
            </g>

            {/* ── Floating labels / tech badges ── */}
            <g className="opacity-15" strokeWidth="1">
                <rect x="155" y="48" width="30" height="12" rx="3" />
                <rect x="152" y="88" width="36" height="12" rx="3" />
                <rect x="148" y="128" width="40" height="12" rx="3" />
            </g>

            {/* ── Corner bracket accents ── */}
            <g className="opacity-25" strokeWidth="1">
                {/* Top-left */}
                <polyline points="20,25 20,18 27,18" />
                {/* Top-right */}
                <polyline points="180,25 180,18 173,18" />
                {/* Bottom-left */}
                <polyline points="20,175 20,182 27,182" />
                {/* Bottom-right */}
                <polyline points="180,175 180,182 173,182" />
            </g>
        </svg>
    );
}
