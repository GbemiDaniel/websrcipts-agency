import React from 'react';

/**
 * ProjectArchitecture (Server Component)
 *
 * Abstract representation of a featured project's architecture:
 * isometric grid planes, cascading data blocks, UI bounding boxes,
 * and flow arrows. All in thin wireframe strokes.
 */
export function ProjectArchitecture(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 300"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Isometric grid base plane ── */}
            <g className="opacity-[0.06]" strokeWidth="0.5">
                {/* Horizontal iso lines */}
                <line x1="40" y1="220" x2="360" y2="220" />
                <line x1="60" y1="240" x2="340" y2="240" />
                <line x1="80" y1="260" x2="320" y2="260" />
                {/* Vertical iso lines */}
                <line x1="100" y1="200" x2="100" y2="280" />
                <line x1="160" y1="200" x2="160" y2="280" />
                <line x1="220" y1="200" x2="220" y2="280" />
                <line x1="280" y1="200" x2="280" y2="280" />
            </g>

            {/* ── UI bounding box 1 (left — browser) ── */}
            <g className="opacity-15" strokeWidth="1">
                <rect x="40" y="40" width="140" height="100" rx="4" />
                {/* Title bar */}
                <line x1="40" y1="56" x2="180" y2="56" />
                {/* Window dots */}
                <circle cx="52" cy="48" r="2" />
                <circle cx="62" cy="48" r="2" />
                <circle cx="72" cy="48" r="2" />
                {/* Content lines */}
                <line x1="55" y1="72" x2="130" y2="72" className="opacity-50" />
                <line x1="55" y1="84" x2="165" y2="84" className="opacity-50" />
                <line x1="55" y1="96" x2="145" y2="96" className="opacity-50" />
                <rect x="55" y="110" width="50" height="16" rx="3" className="opacity-40" />
            </g>

            {/* ── UI bounding box 2 (right — dashboard panel) ── */}
            <g className="opacity-15" strokeWidth="1">
                <rect x="220" y="30" width="150" height="110" rx="4" />
                {/* Sidebar */}
                <line x1="260" y1="30" x2="260" y2="140" />
                {/* Sidebar items */}
                <line x1="230" y1="50" x2="252" y2="50" className="opacity-40" />
                <line x1="230" y1="68" x2="252" y2="68" className="opacity-40" />
                <line x1="230" y1="86" x2="252" y2="86" className="opacity-40" />
                {/* Content area — mini chart */}
                <polyline points="275,110 295,90 315,100 335,70 355,80" className="opacity-40" strokeWidth="1.5" />
            </g>

            {/* ── Cascading data blocks (center) ── */}
            <g className="opacity-20" strokeWidth="1">
                <rect x="140" y="160" width="60" height="30" rx="3" />
                <rect x="160" y="150" width="60" height="30" rx="3" />
                <rect x="180" y="140" width="60" height="30" rx="3" />
            </g>

            {/* ── Flow arrows ── */}
            <g className="opacity-15" strokeWidth="1" strokeLinecap="round">
                {/* Box 1 → Data blocks */}
                <path d="M 130 140 L 155 155" />
                <polyline points="150,150 155,155 148,155" />
                {/* Box 2 → Data blocks */}
                <path d="M 270 140 L 230 155" />
                <polyline points="235,150 230,155 237,155" />
                {/* Data blocks → Grid */}
                <path d="M 200 190 L 200 215" />
                <polyline points="196,210 200,215 204,210" />
            </g>

            {/* ── Floating node dots ── */}
            <g className="opacity-25" strokeWidth="1.5">
                <circle cx="110" cy="90" r="3" />
                <circle cx="295" cy="85" r="3" />
                <circle cx="200" cy="175" r="3" />
                <circle cx="170" cy="155" r="2" />
                <circle cx="230" cy="155" r="2" />
            </g>

            {/* ── Ambient dashed grid ── */}
            <g className="opacity-[0.04]" strokeWidth="0.5" strokeDasharray="3 8">
                <line x1="0" y1="100" x2="400" y2="100" />
                <line x1="0" y1="200" x2="400" y2="200" />
                <line x1="200" y1="0" x2="200" y2="300" />
            </g>
        </svg>
    );
}
