"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="py-24 sm:py-32 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-primary/10" />
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[40px] sm:text-[60px] leading-[1.2] font-luxury tracking-normal text-white mb-6"
                    >
                        Stop losing customers to <br />
                        <span className="text-primary glow-text">slow follow-ups.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
                    >
                        Let AI capture, nurture, and book your leads — 24/7 — without you lifting a finger.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="h-14 px-10 text-lg shadow-[0_0_30px_-5px_var(--primary)] hover:shadow-[0_0_40px_0px_var(--primary)] hover:scale-105 transition-all" onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}>
                            Book Your Free Strategy Call
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-white/10 bg-transparent hover:bg-white/5">
                            Request a Sample Campaign
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
