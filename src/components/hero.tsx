"use client";

import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {

    return (
        <section id="hero" className="relative w-full h-[calc(100vh-6rem)] md:h-[calc(100vh-8rem)] min-h-[600px] flex items-center justify-center bg-black overflow-hidden snap-start mb-16 lg:mb-32">

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
                {/* 2-Column Grid — Optimized Proportions */}
                <div className="grid md:grid-cols-2 lg:grid-cols-[1.2fr_1fr] items-center gap-8 lg:gap-12 w-full">

                    {/* ── Left: Text Content ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex flex-col justify-center space-y-4 md:space-y-5 order-2 md:order-1 relative z-20"
                    >
                        {/* Badge */}
                        <div className="w-fit rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md shadow-sm">
                            <span className="flex items-center gap-2 text-xs md:text-sm font-medium text-blue-400">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                                </span>
                                Accepting New Clients Only: Limited Spots Available
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:leading-[1.15] font-bold tracking-tight text-white py-1">
                            Get 20–30 Qualified <br className="hidden md:block" />
                            Appointments Every Month —{" "}
                            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500 hover:drop-shadow-[0_0_25px_rgba(34,211,238,0.6)]">
                                Without You Lifting a Finger
                            </span>
                        </h1>

                        {/* Subtext */}
                        <p className="max-w-md text-base text-neutral-300 md:text-lg leading-relaxed pt-1">
                            We help local service businesses generate, follow up with, and convert
                            high-intent leads using AI-powered marketing and done-for-you automation.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 sm:flex-row pt-4">
                            <Button
                                size="lg"
                                className="h-12 px-7 text-base bg-white text-black font-semibold hover:bg-neutral-200 transition-all shadow-sm hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)] w-fit"
                                onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}
                            >
                                Book Your Strategy Call
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* ── Right: Fully Interactive 3D Spline Scene ── */}
                    <div className="relative h-full min-h-[400px] md:min-h-[500px] w-full order-1 md:order-2 flex items-center justify-center">
                        {/* Inner Radial Glow specifically behind the 3D robot */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

                        {/* Edge Blending Gradients to remove "boxed" feeling */}
                        <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-x-0 top-0 h-20 md:h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />
                        <div className="absolute inset-x-0 bottom-0 h-20 md:h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

                        {/* The 3D Scene Container - Strictly contained to fit screen */}
                        <div className="absolute inset-0 z-10 flex cursor-move items-center justify-center">
                            <div className="w-full h-full relative pointer-events-auto">
                                <SplineScene
                                    scene="https://prod.spline.design/3x9rRvoxmhizOVBv/scene.splinecode"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Aggressive Global Spline Watermark Blocker 
                Locked to the absolute bottom-right corner and blends fully into the black background */}
            <div
                className="absolute bottom-0 right-0 z-50 pointer-events-none"
                style={{ width: 160, height: 64, background: "black" }}
            />
        </section>
    );
}
