import { siteConfig } from "@/data/config";
import { MapPin, Navigation } from "lucide-react";

export default function Map() {
    return (
        <section
            id="konum"
            className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-stone-900"
        >
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">
                        Konum
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
                        Bizi{" "}
                        <span className="text-gold-gradient">Bulun</span>
                    </h2>
                    <div className="section-divider mt-6" />
                </div>

                {/* Map Card */}
                <div className="rounded-2xl overflow-hidden border border-gold-400/20 shadow-2xl shadow-gold-400/5 group hover:border-gold-400/40 transition-all duration-500">
                    <iframe
                        src={siteConfig.googleMapsEmbed}
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Serena Davet Evi Konum - Mazıdağı Çankaya Kepez Antalya"
                        className="w-full"
                    />
                </div>

                {/* Address & Directions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3 text-center sm:text-left">
                        <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0" />
                        <p className="text-stone-300 text-lg">
                            {siteConfig.address}
                        </p>
                    </div>
                    <a
                        href={siteConfig.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gold-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-gold-500 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30"
                    >
                        <Navigation className="w-4 h-4" />
                        Yol Tarifi Al
                    </a>
                </div>
            </div>
        </section>
    );
}
