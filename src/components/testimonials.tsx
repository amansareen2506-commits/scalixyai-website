"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Lisa M.",
        role: "Local Service Owner",
        content:
            "Our calendar filled in month one—20 booked consults and 6 closed jobs. They handled everything.",
        avatar: "L",
    },
    {
        name: "Carlos D.",
        role: "Business Owner",
        content:
            "No tech hassle. Leads are qualified and show up. Revenue doubled in 90 days.",
        avatar: "C",
    },
    {
        name: "Tina S.",
        role: "Small Business Owner",
        content:
            "Finally a system that actually turns clicks into customers.",
        avatar: "T",
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="relative min-h-screen flex items-center snap-start bg-surface/50 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white">
                        Trusted by <span className="text-accent">Industry Leaders</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Don't just take our word for it. Here's what our partners are saying.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="relative rounded-2xl border border-white/10 bg-background p-8 shadow-sm hover:border-white/20 transition-colors"
                        >
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>

                            <blockquote className="text-lg text-white mb-6">
                                "{testimonial.content}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-bold text-white">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-white">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
