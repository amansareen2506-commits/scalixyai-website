"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 sm:py-32">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-4xl rounded-3xl border border-primary/30 bg-background/50 p-8 md:p-12 relative overflow-hidden text-center"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <ShieldCheck className="h-48 w-48 text-primary" />
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white mb-6">
                            Our DFY Guarantee
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            We set up and run your entire system and deliver 20–30 qualified appointments every month. Everything is done for you: ads, landing pages, AI follow-ups, scheduling and reporting.
                        </p>

                        <div className="grid gap-4 md:grid-cols-2 text-left bg-surface/50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-white/5">
                            <div className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-white">Done-For-You Setup</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-white">20-30 Qualified Appointments</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-white">AI Lead Nurturing</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Check className="h-5 w-5 text-primary shrink-0" />
                                <span className="text-white">Real-Time Reporting</span>
                            </div>
                        </div>

                        <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto" onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}>
                            Start with a Free AI Growth Audit
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
