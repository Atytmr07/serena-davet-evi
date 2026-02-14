import { siteConfig } from "@/data/config";
import {
    Heart,
    Crown,
    Baby,
    PartyPopper,
    Cake,
    type LucideIcon,
    Sparkles,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    Heart,
    Crown,
    Baby,
    PartyPopper,
    Cake,
};

export default function Services() {
    return (
        <section id="hizmetler" className="py-20 bg-cream-50 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-gold-200/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-powder-pink-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" /> Hizmetlerimiz <Sparkles className="w-4 h-4" />
                    </span>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-4 mb-4">
                        Organizasyon <span className="text-gold-gradient">Çeşitlerimiz</span>
                    </h2>
                    <p className="text-stone-500 max-w-2xl mx-auto text-lg">
                        En özel anlarınız için profesyonel çözümler sunuyoruz.
                    </p>
                </div>

                {/* Symmetrical Flex Layout */}
                <div className="flex flex-wrap justify-center gap-6">
                    {siteConfig.services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Heart;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gold-100/50 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-powder-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    {/* Icon Container */}
                                    <div className="w-16 h-16 rounded-full bg-cream-100 flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
                                        <IconComponent className="w-8 h-8 text-gold-500 group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="font-display text-2xl font-bold text-stone-900 mb-3 group-hover:text-white transition-colors duration-500">
                                        {service.title}
                                    </h3>

                                    <p className="text-stone-500 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-500">
                                        {service.description}
                                    </p>

                                    {/* Decorative line on hover */}
                                    <div className="mt-6 w-12 h-1 bg-gold-200 rounded-full group-hover:bg-white group-hover:w-24 transition-all duration-500" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
