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

export function Solution() {
    return (
        <section id="solution" className="relative min-h-screen flex items-center snap-start bg-background overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="mx-auto max-w-[900px] text-center mb-[48px] mt-0">
                    <p className="text-[20px] md:text-[26px] lg:text-[32px] leading-[1.6] text-white font-luxury tracking-normal">
                        We build proven systems that turn inquiries into <span className="text-red-500 font-medium">predictable monthly revenue</span>.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-xl border border-white/5 bg-background/50 p-6 hover:border-primary/20 transition-all duration-300 hover:bg-background/80 flex flex-col h-full"
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
