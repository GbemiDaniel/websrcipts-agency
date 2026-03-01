import React from 'react';

/**
 * NodeNetwork (Server Component)
 *
 * Abstract connected dots representing a project network.
 * Used for Active Projects KPI.
 * Stroke-only, themed via currentColor.
 */
export function NodeNetwork(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Connection lines ── */}
            <g className="opacity-20" strokeWidth="1">
                {/* Central hub connections */}
                <line x1="100" y1="100" x2="55" y2="55" />
                <line x1="100" y1="100" x2="150" y2="60" />
                <line x1="100" y1="100" x2="45" y2="130" />
                <line x1="100" y1="100" x2="155" y2="140" />
                <line x1="100" y1="100" x2="100" y2="45" />
                <line x1="100" y1="100" x2="80" y2="160" />
                {/* Peripheral connections */}
                <line x1="55" y1="55" x2="100" y2="45" />
                <line x1="100" y1="45" x2="150" y2="60" />
                <line x1="45" y1="130" x2="80" y2="160" />
                <line x1="155" y1="140" x2="130" y2="165" />
                <line x1="80" y1="160" x2="130" y2="165" />
            </g>

            {/* ── Peripheral nodes ── */}
            <g className="opacity-30" strokeWidth="1.5">
                <circle cx="55" cy="55" r="8" />
                <circle cx="150" cy="60" r="6" />
                <circle cx="100" cy="45" r="5" />
                <circle cx="45" cy="130" r="7" />
                <circle cx="155" cy="140" r="6" />
                <circle cx="80" cy="160" r="5" />
                <circle cx="130" cy="165" r="4" />
            </g>

            {/* ── Central hub (primary) ── */}
            <g className="opacity-50" strokeWidth="2">
                <circle cx="100" cy="100" r="14" />
                <circle cx="100" cy="100" r="6" />
            </g>

            {/* ── Pulse rings around hub ── */}
            <g className="opacity-10" strokeWidth="0.75">
                <circle cx="100" cy="100" r="30" />
                <circle cx="100" cy="100" r="50" />
            </g>
        </svg>
    );
}
