"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const bullets = [
    "Predictable client acquisition systems",
    "Automated follow-up & booking optimization",
    "Scalable growth strategies",
    "Ongoing strategic guidance & performance refinement",
];

export function PartnershipCTA() {
    return (
        <section id="book-call" className="relative py-12 md:py-16 flex items-center snap-start bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#0A0A0A] border border-white/5 p-8 md:p-12 lg:p-20 shadow-[-10px_-10px_30px_rgba(255,255,255,0.01),_10px_10px_30px_rgba(0,0,0,0.5)]"
                >
                    {/* Abstract Overlay */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent" />
                        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

                        {/* Left Side: Copy & Bullets */}
                        <div className="w-full lg:w-3/5">
                            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] leading-[1.2] font-luxury tracking-normal text-white mb-6">
                                Powering Predictable Growth for Your Business
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-[650px]">
                                Your business already delivers value. Now it’s time to build a system that consistently turns demand into booked revenue.
                            </p>

                            {/* Bullets: 2 columns on desktop, stacked on mobile */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                                {bullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-1 shrink-0 bg-primary/10 rounded-full p-1 text-primary">
                                            <Check className="h-4 w-4" />
                                        </div>
                                        <span className="text-muted-foreground/90 font-medium leading-relaxed">
                                            {bullet}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: CTA Simplified */}
                        <div className="w-full lg:w-2/5 flex flex-col items-start lg:items-center lg:justify-center mt-6 lg:mt-0">
                            <div className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[20px] p-8 md:p-10 w-full max-w-sm flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]" />
                                <Button
                                    size="lg"
                                    onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}
                                    className="w-full h-[60px] text-lg font-bold rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(239,68,68,0.4)] transition-all hover:shadow-[0_0_30px_0px_rgba(239,68,68,0.6)] relative z-10"
                                >
                                    Book a Strategy Call
                                </Button>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}
