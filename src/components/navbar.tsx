"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Problem", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "Results", href: "#results" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity">
                            <div className="relative flex h-10 w-10 items-center justify-center -ml-2 mr-2">
                                <Image src="/logo.png" alt="ScalixyAI Logo" width={64} height={64} className="object-contain scale-[3]" priority />
                            </div>
                            <span>Scalixy<span className="text-primary">AI</span></span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            <div className="flex items-center gap-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                            <Button variant="glow" size="sm" onClick={() => window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank')}>
                                Book Strategy Call
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-foreground focus:outline-none"
                            >
                                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden border-t border-white/10 bg-background"
                        >
                            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button variant="glow" className="w-full" onClick={() => { setIsOpen(false); window.open('https://calendly.com/aman-sparkrecruitai/30min', '_blank'); }}>
                                    Book Strategy Call
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
