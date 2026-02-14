"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { label: "Ana Sayfa", href: "#" },
        { label: "Hizmetler", href: "#hizmetler" },
        { label: "Galeri", href: "#galeri" },
        { label: "Yorumlar", href: "#yorumlar" },
        { label: "Konum", href: "#konum" },
        { label: "İletişim", href: "#iletisim" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-lg shadow-gold-400/5 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <img src="/logo.png" alt="Serena Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col -gap-1">
                        <span
                            style={{ fontFamily: 'var(--font-allura), cursive' }}
                            className={`text-3xl leading-none transition-colors duration-300 ${isScrolled ? "text-gold-500" : "text-gold-200"
                                }`}
                        >
                            Serena
                        </span>
                        <span
                            style={{ fontFamily: 'var(--font-cinzel), serif' }}
                            className={`text-[10px] tracking-[0.3em] uppercase transition-colors duration-300 ${isScrolled ? "text-stone-900" : "text-white"
                                }`}
                        >
                            Davet Evi
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className={`text-sm font-medium transition-colors duration-300 hover:text-gold-400 ${isScrolled ? "text-stone-700" : "text-white/90"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="flex items-center gap-2 bg-gold-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30"
                    >
                        <Phone className="w-4 h-4" />
                        Hemen Ara
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-stone-900" : "text-white"
                        }`}
                    aria-label="Menüyü aç/kapat"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-lg border-t border-gold-100 px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block py-3 px-4 text-stone-700 font-medium rounded-lg hover:bg-gold-50 hover:text-gold-600 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
