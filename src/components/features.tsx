"use client";

import { motion } from "framer-motion";
import { Database, Zap, TrendingUp, Users } from "lucide-react";

const features = [
    {
        icon: Database,
        title: "Tailored Growth Strategies",
        description:
            "Custom AI marketing systems built around your service, location, and revenue goals—so you attract the right customers, not just more leads.",
    },
    {
        icon: Zap,
        title: "Effortless Automation",
        description:
            "AI handles lead capture, instant follow-ups, nurturing, and booking via SMS, email, voice, and CRM—turning inquiries into confirmed appointments.",
    },
    {
        icon: TrendingUp,
        title: "Scalable Revenue Growth",
        description:
            "Whether you’re a single location or expanding across areas, our DFY system delivers 20–30 qualified appointments per month to fuel growth.",
    },
    {
        icon: Users,
        title: "Higher Customer Retention",
        description:
            "Smart reminders, re-engagement campaigns, and follow-ups keep customers returning—boosting repeat revenue, referrals, and lifetime value.",
    },
];

export function Features() {
    return (
        <section id="features" className="py-12 bg-surface/30">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-xl border border-white/5 bg-background/50 p-6 hover:border-primary/20 transition-all duration-300 hover:bg-background/80"
                        >
                            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <feature.icon className="h-6 w-6" />
                            </div>

                            <h3 className="mb-2 text-lg font-bold text-white">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
