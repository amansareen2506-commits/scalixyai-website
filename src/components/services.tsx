"use client";

import { motion } from "framer-motion";
import {
    Bot,
    Mail,
    Database,
    Calendar,
    BarChart3,
    Zap,
} from "lucide-react";

const services = [
    {
        icon: Bot,
        title: "AI Lead Generation Campaigns",
        description:
            "Geo + intent targeting. We find the people actively looking for your services in your area.",
    },
    {
        icon: Mail,
        title: "Automated Follow-Ups",
        description:
            "Instant SMS, Email & WhatsApp sequences that engage leads the second they come in.",
    },
    {
        icon: Database,
        title: "Smart CRM & Pipeline",
        description:
            "A unified view of every lead, conversation, and booking. No more lost sticky notes.",
    },
    {
        icon: Zap,
        title: "AI Chatbots & Voice",
        description:
            "Intelligent assistants that qualify leads and book appointments 24/7.",
    },
    {
        icon: BarChart3,
        title: "Multi-Channel Outreach",
        description:
            "Reach customers where they are—social, text, email, and phone—automatically.",
    },
    {
        icon: Calendar,
        title: "Conversion Optimization",
        description:
            "Data-driven improvements to ensure your ad spend yields the highest possible ROI.",
    },
];

export function Services() {
    return (
        <section id="services" className="relative min-h-screen flex items-center snap-start bg-surface/50 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white">
                        Everything You Need to <span className="text-secondary">Scale</span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our comprehensive suite of AI tools covers every aspect of the
                        customer journey.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-xl border border-white/5 bg-background p-6 hover:border-white/10 transition-colors"
                        >
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface border border-white/5 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                                <service.icon className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-bold text-white">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
