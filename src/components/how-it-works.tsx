"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/splite";

const steps = [
    {
        id: "attract",
        title: "Attract",
        headline: "Attract High-Intent Local Buyers Consistently",
        highlight: "Attract ",
        rest: "High-Intent Local Buyers Consistently",
        paragraph: "A revenue-focused growth system designed to help local service businesses attract more qualified inquiries, increase booked appointments, and drive predictable monthly revenue.",
        bullets: [
            "We position your business in front of high-intent prospects actively searching for your services — so you get noticed by buyers ready to book.",
            "Our system filters out low-quality leads, ensuring you attract serious clients who value your expertise.",
            "Generate a steady stream of qualified booking opportunities every month without relying on referrals or inconsistent marketing.",
        ],
    },
    {
        id: "automate",
        title: "Automate",
        headline: "Engage Every Inquiry Instantly",
        highlight: "Engage ",
        rest: "Every Inquiry Instantly",
        paragraph: "An intelligent follow-up system built to ensure every inquiry is engaged, qualified, and guided toward a booking — automatically.",
        bullets: [
            "We respond instantly to new inquiries so you win attention before competitors do.",
            "Our structured engagement keeps prospects warm and moving forward — eliminating lost opportunities.",
            "Turn incoming leads into active conversations without manual follow-up draining your time.",
        ],
    },
    {
        id: "convert",
        title: "Convert",
        headline: "Turn Interest Into Confirmed Appointments",
        highlight: "Turn ",
        rest: "Interest Into Confirmed Appointments",
        paragraph: "A conversion-driven booking process designed to transform interest into confirmed appointments and real revenue.",
        bullets: [
            "We streamline your customer journey so more inquiries become scheduled consultations.",
            "Our system reduces drop-offs and increases show rates — protecting your marketing investment.",
            "Convert more prospects into paying clients without increasing ad spend.",
        ],
    },
    {
        id: "scale",
        title: "Scale",
        headline: "Scale Revenue Without Increasing Chaos",
        highlight: "Scale ",
        rest: "Revenue Without Increasing Chaos",
        paragraph: "A scalable growth engine designed to increase revenue consistently without operational strain.",
        bullets: [
            "We optimize performance so your cost per acquisition decreases as bookings increase.",
            "Our system strengthens retention and repeat business — increasing lifetime value.",
            "Expand your revenue with confidence, control, and predictable monthly growth.",
        ],
    }
];

export function HowItWorks() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="how-it-works" className="relative min-h-screen flex items-center snap-start overflow-hidden bg-background">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px]" />
            <div className="max-w-7xl mx-auto w-full px-6">
                {/* Header Phase */}
                <div className="mx-auto max-w-4xl text-center mb-16 md:mb-20">
                    <span className="text-sm font-bold tracking-wider text-primary uppercase mb-4 block">
                        HOW IT WORKS
                    </span>
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white mb-6">
                        A Proven 4-Step System to <br className="hidden md:block" />
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Predictable Booked Revenue</span>
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-row overflow-x-auto no-scrollbar justify-start md:justify-center gap-4 md:gap-8 mb-16 md:mb-24 pb-4 md:pb-0">
                    {steps.map((step, index) => {
                        const isActive = activeTab === index;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveTab(index)}
                                className={`flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full transition-all duration-300 border ${isActive
                                    ? "bg-surface/50 border-primary shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)]"
                                    : "bg-surface/20 border-white/5 hover:bg-surface/40 hover:border-white/20 text-muted-foreground"
                                    }`}
                            >
                                <div
                                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-all duration-300 ${isActive
                                        ? "bg-primary text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                                        : "bg-background border border-white/10 text-muted-foreground"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                                <span className={`text-base md:text-lg font-medium transition-colors duration-300 ${isActive ? "text-white" : ""}`}>
                                    {step.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[550px] md:min-h-[450px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full bg-surface/30 backdrop-blur-sm border border-white/10 rounded-[32px] overflow-hidden shadow-2xl relative"
                        >
                            <div className="grid lg:grid-cols-2 min-h-[600px]">
                                {/* Left Column: Text Content */}
                                <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10 w-full">
                                    <h3 className="text-[28px] md:text-[36px] lg:text-[42px] leading-[1.3] font-luxury tracking-normal text-white mb-6">
                                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">{steps[activeTab].highlight}</span>
                                        {steps[activeTab].rest}
                                    </h3>

                                    <div className="h-px w-24 bg-gradient-to-r from-red-500/50 to-transparent mb-8" />

                                    <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                                        {steps[activeTab].paragraph}
                                    </p>

                                    <ul className="space-y-5 mb-10 w-full max-w-xl">
                                        {steps[activeTab].bullets.map((bullet, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="mt-1 shrink-0 bg-red-500/20 text-red-500 rounded-full p-1 border border-red-500/20">
                                                    <Check className="h-4 w-4" />
                                                </div>
                                                <span className="text-muted-foreground leading-relaxed">
                                                    {bullet}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div>
                                        <Button
                                            size="lg"
                                            className="h-14 px-10 text-lg font-semibold shadow-[0_0_30px_-5px_rgba(239,68,68,0.4)] hover:shadow-[0_0_40px_0px_rgba(239,68,68,0.6)] transition-all bg-primary hover:bg-primary/90 rounded-full text-white"
                                            onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}
                                        >
                                            Book a Strategy Call
                                        </Button>
                                    </div>
                                </div>

                                {/* Right Column: 3D Spline Scene */}
                                <div className="relative w-full h-[400px] lg:h-auto min-h-[500px] bg-black/20 lg:border-l border-white/5 overflow-hidden flex items-center justify-center">
                                    {/* Abstract background glow behind the 3D model */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent z-0" />

                                    <div className="absolute inset-0 z-10 flex items-center justify-center p-8 lg:p-16 pointer-events-auto">
                                        <div className="relative w-full h-full max-w-[400px] max-h-[400px] lg:max-w-[500px] lg:max-h-[500px]">
                                            <SplineScene
                                                scene="https://prod.spline.design/9d-c3rWuv1-8H0iu/scene.splinecode"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Overlay gradients to blend harsh edges if the scene doesn't naturally fade */}
                                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-20" />
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
