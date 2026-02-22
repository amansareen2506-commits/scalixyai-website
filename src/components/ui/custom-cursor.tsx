"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(true);

    // Keep state out of the render cycle by using mutable refs for position tracking
    const position = useRef({ x: -100, y: -100 });
    const target = useRef({ x: -100, y: -100 });
    const isHovering = useRef(false);
    const isPrimaryCta = useRef(false);

    useEffect(() => {
        // Disable strictly on touch overlays
        if (window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(hover: none)").matches) {
            setIsDesktop(false);
            return;
        }

        let rafId: number;

        // The high-performance render loop
        const render = () => {
            // Very slight interpolation for smoothness without lag (0.4 is very fast)
            position.current.x += (target.current.x - position.current.x) * 0.4;
            position.current.y += (target.current.y - position.current.y) * 0.4;

            if (cursorRef.current) {
                // Determine CSS scale
                const scale = isPrimaryCta.current ? 1.15 : isHovering.current ? 1.08 : 1;

                // Set style directly bypassing React
                cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0) scale(${scale})`;

                // Update opacity if the mouse is moving (hide when frozen/offscreen)
                cursorRef.current.style.opacity = "1";

                // Update the cheap radial gradient glow based on state
                const glowElement = cursorRef.current.querySelector('.cursor-glow') as HTMLDivElement;
                if (glowElement) {
                    if (isPrimaryCta.current) {
                        glowElement.style.opacity = "1";
                        glowElement.style.transform = "scale(1.5)";
                        glowElement.style.background = "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, transparent 70%)";
                    } else if (isHovering.current) {
                        glowElement.style.opacity = "1";
                        glowElement.style.transform = "scale(1)";
                        glowElement.style.background = "radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)";
                    } else {
                        glowElement.style.opacity = "0";
                    }
                }
            }

            rafId = requestAnimationFrame(render);
        };

        const moveCursor = (e: MouseEvent) => {
            // Update TARGET coordinates instantly
            target.current.x = e.clientX;
            target.current.y = e.clientY;
        };

        // DOM Evaluator: ONLY runs when pointer enters a new element
        const evaluateHoverState = (e: MouseEvent) => {
            const el = e.target as HTMLElement;
            if (!el) return;

            const isClickable =
                window.getComputedStyle(el).cursor === "pointer" ||
                el.tagName.toLowerCase() === "button" ||
                el.tagName.toLowerCase() === "a" ||
                el.tagName.toLowerCase() === "input" ||
                el.tagName.toLowerCase() === "textarea" ||
                el.closest("button") !== null ||
                el.closest("a") !== null;

            isHovering.current = isClickable;

            if (isClickable) {
                const buttonText = el.innerText?.toLowerCase() || el.closest("button")?.innerText?.toLowerCase() || "";
                isPrimaryCta.current = buttonText.includes("book") || buttonText.includes("strategy call");
            } else {
                isPrimaryCta.current = false;
            }
        };

        const handleMouseLeaveWindow = () => {
            if (cursorRef.current) cursorRef.current.style.opacity = "0";
        };

        // Bind global listeners with passive flags
        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", evaluateHoverState, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeaveWindow);

        // Start render loop
        rafId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", evaluateHoverState);
            document.removeEventListener("mouseleave", handleMouseLeaveWindow);
            cancelAnimationFrame(rafId);
        };
    }, []);

    if (!isDesktop) return null;

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    *, *::before, *::after {
                        cursor: none !important;
                    }
                `
            }} />

            {/* Single DOM node wrapper */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 pointer-events-none z-[9999] opacity-0"
                style={{
                    willChange: "transform",
                    transformOrigin: "top left",
                    transition: "opacity 0.2s ease", // Only transition opacity, transform is managed by RAF
                }}
            >
                {/* 
                  High-performance Glow: 
                  Uses radial gradient instead of CSS blur() to save massive GPU cycles 
                */}
                <div
                    className="cursor-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full mix-blend-screen opacity-0"
                    style={{
                        transition: "opacity 0.2s ease, transform 0.2s ease",
                        willChange: "transform, opacity"
                    }}
                />

                {/* The glossy Mac SVG Arrow (Optimized - removed heavy drop-shadows, kept simple SVG formatting) */}
                <div className="relative -left-[2px] -top-[2px]">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                            // Replaced heavy multi-drop-shadow with a much lighter single CSS filter
                            filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.5))",
                        }}
                    >
                        {/* Outer border for crisp striking edge */}
                        <polygon
                            points="4,3.5 4,25.5 10,19.5 14.5,29 18,27.5 13.5,18 22,18"
                            fill="white"
                            stroke="white"
                            strokeWidth="1"
                            strokeLinejoin="round"
                        />

                        {/* Inner pitch black gradient body */}
                        <polygon
                            points="5.5,5.5 5.5,23 10.5,18 15,27 16.5,26 12,17 19.5,17"
                            fill="url(#baseGrad)"
                        />

                        {/* Sharp diagonal glassy highlight */}
                        <polygon
                            points="5.5,5.5 5.5,14 11.5,10.5"
                            fill="url(#highlightGrad)"
                        />

                        <defs>
                            <linearGradient id="baseGrad" x1="5.5" y1="5.5" x2="19.5" y2="26" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#4a4a4c" />
                                <stop offset="40%" stopColor="#1a1a1c" />
                                <stop offset="100%" stopColor="#000000" />
                            </linearGradient>

                            <linearGradient id="highlightGrad" x1="5.5" y1="5.5" x2="11.5" y2="10.5" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </>
    );
}
