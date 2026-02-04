"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-40 px-4 pt-16 pb-4 md:px-8">
                <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex items-center justify-between shadow-sm relative">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="absolute left-6 -top-16 h-48 w-auto z-50">
                            <img
                                src="/logo-new.png"
                                alt="Admission India"
                                className="h-full w-full object-contain logo-blend"
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-500 ml-40">
                        <Link href="#" className="text-gray-900 hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="#" className="hover:text-gray-900 transition-colors">Services</Link>
                        <Link href="#" className="hover:text-gray-900 transition-colors">Colleges</Link>
                        <Link href="#" className="hover:text-gray-900 transition-colors">Study Abroad</Link>
                        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-600">
                            <Search size={16} />
                        </button>
                        <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl text-xs font-semibold tracking-wide">
                            Book Consultation
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-900 p-2"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl p-6 flex flex-col"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <span className="text-xl font-bold">Menu</span>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-gray-100 rounded-full">
                                <X size={24} />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 text-2xl font-semibold text-gray-800">
                            <Link href="#" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)}>Services</Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)}>Colleges</Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)}>Study Abroad</Link>
                            <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-blue-600">Contact</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
