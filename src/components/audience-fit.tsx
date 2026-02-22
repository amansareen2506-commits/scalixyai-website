"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const goodFits = [
    "Sell medium-to-high ticket or consultation-based services",
    "Rely on scheduled calls, on-site visits, or discovery meetings to close deals",
    "Currently get inquiries but lose revenue because of slow follow-up or manual booking",
    "Are ready to invest in growth and follow a proven sales process",
    "Want measurable booked appointments (not vanity metrics)",
];

const badFits = [
    "Businesses without a proven offer or clear pricing",
    "Companies prioritizing cheap clicks over quality clients",
    "Owners unwilling to commit to follow-through or basic sales hygiene",
    "Very low-ticket, volume-first businesses",
];

export function AudienceFit() {
    return (
        <section id="who-we-serve" className="relative py-12 md:py-16 flex items-center snap-start bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-bold tracking-wider text-primary uppercase mb-4 block">
                            WHO WE SERVE
                        </span>
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white mb-6">
                            Built for businesses that want predictable, scalable revenue
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            If your business depends on booked consultations, estimates, or appointments to close sales — this system turns inquiries into scheduled revenue, not just clicks.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Good Fit Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-surface/30 border border-white/10 rounded-2xl p-8"
                    >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            You&apos;re a strong fit if you:
                        </h3>
                        <ul className="space-y-4">
                            {goodFits.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 shrink-0 bg-green-500/20 text-green-500 rounded-full p-1">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Bad Fit Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-background/50 border border-white/5 rounded-2xl p-8 opacity-80"
                    >
                        <h3 className="text-xl font-bold text-muted-foreground mb-6 flex items-center gap-3">
                            Who we don&apos;t work with
                        </h3>
                        <ul className="space-y-4">
                            {badFits.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 shrink-0 text-muted-foreground/50">
                                        <X className="h-4 w-4" />
                                    </div>
                                    <span className="text-muted-foreground/70">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Divider Line */}
                <div className="max-w-5xl mx-auto my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Qualification Close */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        How to know in 30 seconds
                    </h3>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                        If you need consultations to sell, are already getting some inquiries, and want a predictable system that turns them into booked revenue — you&apos;re likely a strong fit.
                    </p>
                    <Button
                        size="lg"
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-8 py-6 text-lg shadow-[0_0_30px_-5px_rgba(239,68,68,0.5)] hover:shadow-[0_0_40px_0px_rgba(239,68,68,0.7)] transition-all duration-300"
                        onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}
                    >
                        Apply for a Strategy Call
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
