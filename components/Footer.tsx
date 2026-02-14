import { siteConfig } from "@/data/config";
import { Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer
            id="iletisim"
            className="relative bg-stone-900 pt-20 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 relative flex items-center justify-center bg-white/5 rounded-full p-1 border border-white/10">
                                <img src="/logo.png" alt="Serena Logo" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3
                                    style={{ fontFamily: 'var(--font-allura), cursive' }}
                                    className="text-4xl leading-none text-gold-400"
                                >
                                    Serena
                                </h3>
                                <p
                                    style={{ fontFamily: 'var(--font-cinzel), serif' }}
                                    className="text-[10px] tracking-[0.3em] uppercase text-white mt-1 opacity-80"
                                >
                                    Davet Evi
                                </p>
                            </div>
                        </div>
                        <p className="text-stone-400 leading-relaxed mb-6">
                            {siteConfig.footer.closing}
                        </p>
                        <p className="text-stone-500 italic text-sm">
                            &ldquo;{siteConfig.slogan}&rdquo;
                        </p>
                    </div>

                    {/* İletişim */}
                    <div className="md:col-span-1">
                        <h4 className="font-display text-lg font-semibold text-white mb-6">
                            İletişim
                        </h4>
                        <div className="space-y-4">
                            <a
                                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                                className="flex items-center gap-3 text-stone-400 hover:text-gold-400 transition-colors group"
                            >
                                <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                {siteConfig.phone}
                            </a>
                            <div className="flex items-start gap-3 text-stone-400">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span>{siteConfig.address}</span>
                            </div>
                            <a
                                href="https://www.instagram.com/serena.davetevi"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-stone-400 hover:text-powder-pink-300 transition-colors group"
                            >
                                <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                @{siteConfig.instagram}
                            </a>
                        </div>
                    </div>

                    {/* Hizmetler Quick Links */}
                    <div className="md:col-span-1">
                        <h4 className="font-display text-lg font-semibold text-white mb-6">
                            Hizmetlerimiz
                        </h4>
                        <ul className="space-y-3">
                            {siteConfig.services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href="#hizmetler"
                                        className="text-stone-400 hover:text-gold-400 transition-colors text-sm"
                                    >
                                        {service.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-stone-500 text-sm">
                        {siteConfig.footer.copyright}
                    </p>
                    <p className="text-stone-600 text-xs flex items-center gap-1">
                        Antalya&apos;da <Heart className="w-3 h-3 text-powder-pink-300 fill-powder-pink-300" /> ile yapıldı
                    </p>
                </div>
            </div>
        </footer>
    );
}
