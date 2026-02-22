"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export function CaseStudy() {
    return (
        <section id="case-study" className="relative min-h-screen flex items-center snap-start bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                            Case Study
                        </div>
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white mb-6">
                            Before &#8594; After: <span className="text-primary">What Changes</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            See the difference a unified AI system makes in just 30 days.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <h4 className="text-red-500 font-bold mb-4">Before</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Leads scattered",
                                        "Slow follow-ups",
                                        "No-shows",
                                        "Wasted ad spend",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-green-500 font-bold mb-4">After</h4>
                                <ul className="space-y-3">
                                    {[
                                        "Unified pipeline",
                                        "Instant AI follow-ups",
                                        "Scheduled appointments",
                                        "Measurable ROI",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-white">
                                            <Check className="h-4 w-4 text-green-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Button variant="default" size="lg" onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}>
                            See a sample campaign
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    {/* Chart/Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl" />
                        <div className="relative rounded-xl border border-white/10 bg-surface/80 p-6 backdrop-blur-sm">
                            <div className="space-y-6">
                                <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                    <div>
                                        <div className="text-sm text-muted-foreground">Monthly Revenue</div>
                                        <div className="text-3xl font-bold text-white">$62,400</div>
                                    </div>
                                    <div className="text-sm font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded">+240% Growth</div>
                                </div>

                                {/* Simple Bar Chart Mockup */}
                                <div className="h-64 flex items-end justify-between gap-2">
                                    {[30, 45, 35, 60, 85, 100].map((height, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            whileInView={{ height: `${height}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className={`w-full rounded-t-sm ${i > 3 ? 'bg-primary shadow-[0_0_20px_-5px_var(--primary)]' : 'bg-white/10'}`}
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground uppercase opacity-50">
                                    <span>Month 1</span>
                                    <span>Month 6</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
