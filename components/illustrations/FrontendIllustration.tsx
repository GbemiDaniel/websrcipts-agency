import React from 'react';

/**
 * FrontendIllustration (Server Component)
 *
 * Etched wireframe depicting UI/UX wireframing — overlapping browser window
 * outlines, bounding boxes with anchor-point resize handles, and a subtle
 * background grid. Stroke-only, themed via currentColor.
 */
export function FrontendIllustration(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Background grid ── */}
            <g className="opacity-[0.07]" strokeWidth="0.5">
                {Array.from({ length: 9 }, (_, i) => {
                    const pos = 20 + i * 20;
                    return (
                        <React.Fragment key={i}>
                            <line x1={pos} y1="20" x2={pos} y2="180" />
                            <line x1="20" y1={pos} x2="180" y2={pos} />
                        </React.Fragment>
                    );
                })}
            </g>

            {/* ── Back browser window (deeper layer) ── */}
            <g className="opacity-20" strokeWidth="1">
                <rect x="55" y="30" width="120" height="90" rx="6" />
                {/* Title bar dots */}
                <circle cx="65" cy="40" r="2" />
                <circle cx="73" cy="40" r="2" />
                <circle cx="81" cy="40" r="2" />
                {/* Address bar */}
                <rect x="63" y="50" width="100" height="6" rx="3" />
                {/* Content skeleton lines */}
                <line x1="63" y1="68" x2="145" y2="68" />
                <line x1="63" y1="78" x2="130" y2="78" />
                <line x1="63" y1="88" x2="155" y2="88" />
            </g>

            {/* ── Front browser window (primary layer) ── */}
            <g className="opacity-50" strokeWidth="1.5">
                <rect x="25" y="60" width="130" height="100" rx="6" />
                {/* Title bar dots */}
                <circle cx="36" cy="71" r="2.5" />
                <circle cx="45" cy="71" r="2.5" />
                <circle cx="54" cy="71" r="2.5" />
                {/* Address bar */}
                <rect x="35" y="82" width="108" height="7" rx="3.5" />
                {/* UI skeleton blocks */}
                <rect x="35" y="98" width="50" height="30" rx="3" />
                <rect x="92" y="98" width="50" height="14" rx="3" />
                <rect x="92" y="118" width="50" height="14" rx="3" />
                <line x1="35" y1="140" x2="143" y2="140" />
                <line x1="35" y1="148" x2="110" y2="148" />
            </g>

            {/* ── Bounding box with anchor handles ── */}
            <g className="opacity-40" strokeWidth="1" strokeDasharray="4 3">
                <rect x="30" y="95" width="58" height="38" rx="1" />
            </g>
            <g className="opacity-60" strokeWidth="1.5">
                {/* Corner anchor points */}
                <rect x="27" y="92" width="5" height="5" rx="1" />
                <rect x="85" y="92" width="5" height="5" rx="1" />
                <rect x="27" y="130" width="5" height="5" rx="1" />
                <rect x="85" y="130" width="5" height="5" rx="1" />
            </g>

            {/* ── Floating measurement line ── */}
            <g className="opacity-25" strokeWidth="0.75">
                <line x1="165" y1="60" x2="165" y2="160" />
                <line x1="160" y1="60" x2="170" y2="60" />
                <line x1="160" y1="160" x2="170" y2="160" />
            </g>
        </svg>
    );
}
