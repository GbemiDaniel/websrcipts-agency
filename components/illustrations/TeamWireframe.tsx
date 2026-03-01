import React from 'react';

/**
 * TeamWireframe (Server Component)
 *
 * Abstract representation of a collaborative team: intersecting orbital
 * rings, interconnected nodes, and abstract avatars rendered in thin
 * wireframe strokes. Used in the AboutTeaser component.
 */
export function TeamWireframe(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Orbital rings ── */}
            <g className="opacity-[0.12]" strokeWidth="0.75">
                <ellipse cx="200" cy="200" rx="170" ry="80" transform="rotate(-20 200 200)" />
                <ellipse cx="200" cy="200" rx="170" ry="80" transform="rotate(40 200 200)" />
                <ellipse cx="200" cy="200" rx="170" ry="80" transform="rotate(100 200 200)" />
            </g>

            {/* ── Connection lines — linking nodes across orbits ── */}
            <g className="opacity-[0.10]" strokeWidth="0.75" strokeDasharray="4 6">
                <line x1="110" y1="130" x2="200" y2="200" />
                <line x1="290" y1="130" x2="200" y2="200" />
                <line x1="200" y1="200" x2="130" y2="290" />
                <line x1="200" y1="200" x2="280" y2="280" />
                <line x1="110" y1="130" x2="290" y2="130" />
                <line x1="130" y1="290" x2="280" y2="280" />
                <line x1="200" y1="90" x2="200" y2="200" />
                <line x1="200" y1="200" x2="200" y2="320" />
            </g>

            {/* ── Central hub avatar ── */}
            <g className="opacity-30" strokeWidth="1.5">
                {/* Head */}
                <circle cx="200" cy="180" r="16" />
                {/* Shoulders arc */}
                <path d="M 172 216 Q 186 200 200 200 Q 214 200 228 216" />
            </g>

            {/* ── Satellite avatar 1 (top-left) ── */}
            <g className="opacity-20" strokeWidth="1">
                <circle cx="110" cy="118" r="10" />
                <path d="M 92 144 Q 101 132 110 132 Q 119 132 128 144" />
            </g>

            {/* ── Satellite avatar 2 (top-right) ── */}
            <g className="opacity-20" strokeWidth="1">
                <circle cx="290" cy="118" r="10" />
                <path d="M 272 144 Q 281 132 290 132 Q 299 132 308 144" />
            </g>

            {/* ── Satellite avatar 3 (bottom-left) ── */}
            <g className="opacity-20" strokeWidth="1">
                <circle cx="130" cy="278" r="10" />
                <path d="M 112 304 Q 121 292 130 292 Q 139 292 148 304" />
            </g>

            {/* ── Satellite avatar 4 (bottom-right) ── */}
            <g className="opacity-20" strokeWidth="1">
                <circle cx="280" cy="268" r="10" />
                <path d="M 262 294 Q 271 282 280 282 Q 289 282 298 294" />
            </g>

            {/* ── Satellite avatar 5 (top-center) ── */}
            <g className="opacity-15" strokeWidth="1">
                <circle cx="200" cy="78" r="8" />
                <path d="M 186 100 Q 193 90 200 90 Q 207 90 214 100" />
            </g>

            {/* ── Satellite avatar 6 (bottom-center) ── */}
            <g className="opacity-15" strokeWidth="1">
                <circle cx="200" cy="310" r="8" />
                <path d="M 186 332 Q 193 322 200 322 Q 207 322 214 332" />
            </g>

            {/* ── Node dots on orbital intersections ── */}
            <g className="opacity-25" strokeWidth="1.5">
                <circle cx="110" cy="130" r="3" />
                <circle cx="290" cy="130" r="3" />
                <circle cx="130" cy="290" r="3" />
                <circle cx="280" cy="280" r="3" />
                <circle cx="200" cy="90" r="3" />
                <circle cx="200" cy="320" r="3" />
            </g>

            {/* ── Central hub pulse ring ── */}
            <g className="opacity-[0.08]" strokeWidth="0.5">
                <circle cx="200" cy="200" r="50" />
                <circle cx="200" cy="200" r="75" />
            </g>
        </svg>
    );
}
