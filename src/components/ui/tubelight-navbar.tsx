"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Users, Briefcase, Layers, LucideIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NavItem {
    name: string
    url: string
    icon: LucideIcon
}

const navItems = [
    { name: "Home", url: "#hero", icon: Home },
    { name: "Who We Serve", url: "#who-we-serve", icon: Users },
    { name: "Results", url: "#results", icon: Briefcase },
    { name: "Our Process", url: "#process", icon: Layers },
]

interface TubelightNavbarProps {
    className?: string
}

export function TubelightNavbar({ className }: TubelightNavbarProps) {
    const [activeTab, setActiveTab] = useState(navItems[0].name)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        url: string,
        name: string
    ) => {
        e.preventDefault();
        setActiveTab(name);
        const targetId = url.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank');
    };

    if (!isMounted) return null;

    return (
        <div
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 sm:pt-6 pointer-events-none",
                className
            )}
        >
            <div className="w-full max-w-[1200px] px-4 md:px-6 flex items-center justify-between pointer-events-auto">

                {/* Left: Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
                        <div className="relative flex h-10 w-10 items-center justify-center -ml-2 mr-2">
                            <Image src="/logo.png" alt="ScalixyAI Logo" width={64} height={64} className="object-contain scale-[3]" priority />
                        </div>
                        <span className="hidden sm:inline-block text-white">Scalixy<span className="text-primary">AI</span></span>
                    </Link>
                </div>

                {/* Center: Desktop Nav Items (Thinner Pill) */}
                <div className="hidden md:flex flex-1 justify-center">
                    <div className="flex items-center gap-1 bg-background/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        {navItems.map((item) => {
                            const isActive = activeTab === item.name

                            return (
                                <a
                                    key={item.name}
                                    href={item.url}
                                    onClick={(e) => handleNavClick(e, item.url, item.name)}
                                    className={cn(
                                        "relative cursor-pointer text-sm font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-full transition-colors whitespace-nowrap",
                                        isActive ? "text-primary" : "text-muted-foreground hover:text-white"
                                    )}
                                >
                                    <span>{item.name}</span>

                                    {isActive && (
                                        <motion.div
                                            layoutId="tubelight"
                                            className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                                            initial={false}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        >
                                            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                                                <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                                                <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                                                <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                                            </div>
                                        </motion.div>
                                    )}
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* Mobile Tubelight Nav (Bottom Floating) */}
                <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-background/5 border border-white/10 backdrop-blur-lg py-1.5 px-1.5 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.8)] z-50 pointer-events-auto">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.name
                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                onClick={(e) => handleNavClick(e, item.url, item.name)}
                                className={cn(
                                    "relative cursor-pointer text-xs font-medium px-4 py-2 rounded-full transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-white"
                                )}
                            >
                                <item.icon size={20} strokeWidth={2} />
                                {isActive && (
                                    <motion.div
                                        layoutId="tubelight-mobile"
                                        className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    >
                                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary rounded-t-full">
                                            <div className="absolute w-8 h-4 bg-primary/20 rounded-full blur-sm -top-1 -left-1" />
                                        </div>
                                    </motion.div>
                                )}
                            </a>
                        )
                    })}
                </div>

                {/* Right: CTA Button */}
                <div className="flex-shrink-0 z-10 pointer-events-auto">
                    <Button onClick={handleCTAClick} className="rounded-full bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] text-xs sm:text-sm md:text-base px-4 sm:px-5 md:px-6 h-9 sm:h-10 whitespace-nowrap transition-shadow duration-300">
                        Book Strategy Call
                    </Button>
                </div>

            </div>
        </div>
    )
}
