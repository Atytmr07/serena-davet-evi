import { siteConfig } from "@/data/config";
import { MessageCircle, Phone, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative h-[100dvh] flex items-center justify-center overflow-hidden w-full perspective-1000"
        >
            {/* 1. Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Image with slow zoom effect */}
                <div
                    className="absolute inset-0 bg-cover bg-center animate-image-reveal scale-105"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop')",
                        animationDuration: '20s'
                    }}
                />
                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/40" />

                {/* Gold Glow Center */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_70%)] pointer-events-none" />
            </div>

            {/* 2. Floating Particles (CSS Animation) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-gold-200 rounded-full blur-[1px] animate-float opacity-60"
                        style={{
                            width: Math.random() * 4 + 2 + 'px',
                            height: Math.random() * 4 + 2 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animationDelay: i * 2 + 's',
                            animationDuration: (Math.random() * 10 + 10) + 's'
                        }}
                    />
                ))}
            </div>

            {/* 3. Main Content Container - Glassmorphism */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">

                {/* Floating Content Box */}
                <div className="relative p-8 md:p-16 rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl flex flex-col items-center text-center animate-fade-in-up transition-transform duration-700 hover:scale-[1.01] hover:bg-white/10 group">

                    {/* Decorative Top Sparkle */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                        <div className="relative group/star">
                            <div className="absolute inset-0 blur-xl bg-gold-400/50 rounded-full animate-pulse-gold group-hover/star:bg-gold-300/60 transition-colors" />
                            <Sparkles className="w-12 h-12 text-gold-300 fill-current drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-float" />
                        </div>
                    </div>

                    {/* Typography Block */}
                    <div className="mb-10 relative">
                        {/* Huge Script Title */}
                        <h1
                            className="font-script text-[6rem] sm:text-[8rem] md:text-[11rem] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-br from-cream-100 via-gold-200 to-amber-500 drop-shadow-[0_4px_16px_rgba(212,175,55,0.3)] select-none transition-all duration-500 group-hover:drop-shadow-[0_4px_24px_rgba(212,175,55,0.5)]"
                            style={{ fontFamily: 'var(--font-allura), cursive' }}
                        >
                            Serena
                        </h1>

                        {/* Elegant Subtitle */}
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <div className="h-[1px] w-8 md:w-20 bg-gradient-to-r from-transparent to-gold-300 opacity-60" />
                            <h2 className="font-serif text-white/90 text-xs sm:text-sm md:text-lg tracking-[0.3em] md:tracking-[0.5em] uppercase font-light drop-shadow-md">
                                Organizasyon ve Davet Evi
                            </h2>
                            <div className="h-[1px] w-8 md:w-20 bg-gradient-to-l from-transparent to-gold-300 opacity-60" />
                        </div>
                    </div>

                    {/* Tagline */}
                    <p className="font-sans text-white/80 text-lg md:text-xl font-light mb-10 max-w-lg italic opacity-0 animate-fade-in-up-delay" style={{ animationDelay: '0.4s' }}>
                        &ldquo;{siteConfig.hero.headline}&rdquo;
                    </p>

                    {/* Capacity Badge */}
                    <div className="mb-12 opacity-0 animate-fade-in-up-delay" style={{ animationDelay: '0.6s' }}>
                        <div className="inline-flex items-center gap-3 px-1.5 py-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
                            <span className="px-4 py-2 rounded-full bg-white/5 text-white/80 text-xs tracking-widest uppercase border border-white/5 font-serif">
                                Kepez, Antalya
                            </span>
                            <span className="px-6 py-2 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-white text-xs font-bold tracking-widest uppercase shadow-lg shadow-gold-500/20 font-serif">
                                {siteConfig.hero.capacityBadge}
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons - Premium Selection */}
                    <div className="flex flex-col sm:flex-row gap-5 opacity-0 animate-fade-in-up-delay" style={{ animationDelay: '0.8s' }}>

                        {/* Primary: Signature Royal Gold */}
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba, fiyat bilgisi almak istiyorum.`}
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 text-white px-10 py-4 rounded-full text-lg font-sans font-medium tracking-wide transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.4)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.6)] hover:-translate-y-1 hover:brightness-110 overflow-hidden"
                        >
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent z-10" />
                            <MessageCircle className="w-5 h-5 relative z-20" />
                            <span className="relative z-20 font-semibold text-shadow-sm">Fiyat Teklifi Al</span>
                        </a>

                        {/* Secondary: Crystal Glass (Replacing Pink) */}
                        {/* This looks ethereal and sophisticated, letting the luxury background show through */}
                        <a
                            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                            className="group relative flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white px-10 py-4 rounded-full text-lg font-sans font-medium tracking-wide transition-all duration-300 backdrop-blur-md shadow-lg shadow-black/10 hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 hover:shadow-white/5"
                        >
                            <Phone className="w-5 h-5 group-hover:text-gold-300 transition-colors" />
                            <span className="font-semibold text-shadow-sm group-hover:text-gold-200 transition-colors">Hemen Ara</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 animate-bounce">
                <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase font-sans">Kaydır</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                <ChevronDown className="w-6 h-6 text-white/50" />
            </div>
        </section>
    );
}
