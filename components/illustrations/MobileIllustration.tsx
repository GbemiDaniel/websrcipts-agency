import React from 'react';

/**
 * MobileIllustration (Server Component)
 *
 * Etched wireframe depicting native app development — a modern smartphone
 * outline with abstract UI skeletal blocks inside the screen and a floating
 * interaction node. Stroke-only, themed via currentColor.
 */
export function MobileIllustration(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            stroke="currentColor"
            aria-hidden="true"
            {...props}
        >
            {/* ── Background radial rings ── */}
            <g className="opacity-[0.05]" strokeWidth="0.5">
                <circle cx="100" cy="100" r="40" />
                <circle cx="100" cy="100" r="65" />
                <circle cx="100" cy="100" r="90" />
            </g>

            {/* ── Phone body ── */}
            <g className="opacity-50" strokeWidth="1.5">
                <rect x="60" y="25" width="80" height="155" rx="12" />
                {/* Top notch / dynamic island */}
                <rect x="88" y="30" width="24" height="6" rx="3" />
                {/* Screen area */}
                <rect x="66" y="42" width="68" height="125" rx="4" />
            </g>

            {/* ── UI skeleton inside screen ── */}
            <g className="opacity-35" strokeWidth="1">
                {/* Status bar */}
                <line x1="72" y1="50" x2="88" y2="50" />
                <line x1="120" y1="50" x2="128" y2="50" />

                {/* Header / nav bar */}
                <rect x="72" y="57" width="56" height="10" rx="2" />

                {/* Hero image placeholder */}
                <rect x="72" y="73" width="56" height="30" rx="3" />
                {/* X in placeholder */}
                <line x1="72" y1="73" x2="128" y2="103" />
                <line x1="128" y1="73" x2="72" y2="103" />

                {/* Content cards */}
                <rect x="72" y="110" width="25" height="20" rx="2" />
                <rect x="103" y="110" width="25" height="20" rx="2" />

                {/* Text skeleton lines */}
                <line x1="72" y1="138" x2="128" y2="138" />
                <line x1="72" y1="145" x2="115" y2="145" />
                <line x1="72" y1="152" x2="108" y2="152" />
            </g>

            {/* ── Bottom navigation bar ── */}
            <g className="opacity-30" strokeWidth="1">
                <line x1="66" y1="158" x2="134" y2="158" />
                <circle cx="82" cy="163" r="3" />
                <circle cx="100" cy="163" r="3" />
                <circle cx="118" cy="163" r="3" />
            </g>

            {/* ── Floating interaction node ── */}
            <g className="opacity-40" strokeWidth="1.5">
                {/* Node circle */}
                <circle cx="155" cy="80" r="10" />
                <circle cx="155" cy="80" r="4" />
                {/* Connection line to phone */}
                <line x1="140" y1="80" x2="145" y2="80" strokeDasharray="3 2" />
            </g>

            {/* ── Touch / gesture indicator ── */}
            <g className="opacity-25" strokeWidth="1">
                {/* Tap ripple rings */}
                <circle cx="42" cy="140" r="6" />
                <circle cx="42" cy="140" r="12" />
                {/* Arrow pointing to screen */}
                <line x1="48" y1="140" x2="60" y2="140" strokeDasharray="2 2" />
            </g>

            {/* ── Floating dimension markers ── */}
            <g className="opacity-15" strokeWidth="0.75">
                {/* Width marker */}
                <line x1="60" y1="188" x2="140" y2="188" />
                <line x1="60" y1="185" x2="60" y2="191" />
                <line x1="140" y1="185" x2="140" y2="191" />
                {/* Height marker */}
                <line x1="148" y1="25" x2="148" y2="180" />
                <line x1="145" y1="25" x2="151" y2="25" />
                <line x1="145" y1="180" x2="151" y2="180" />
            </g>
        </svg>
    );
}
