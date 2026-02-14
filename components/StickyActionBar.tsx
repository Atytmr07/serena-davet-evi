import { siteConfig } from "@/data/config";
import { Phone, MessageCircle } from "lucide-react";

export default function StickyActionBar() {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-gold-100 p-3 flex gap-3 md:hidden z-50 shadow-lg shadow-stone-900/10">
            <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex-1 bg-gold-400 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-gold-500 transition-colors active:scale-95 transition-transform"
            >
                <Phone className="w-5 h-5" />
                Hemen Ara
            </a>
            <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=Merhaba, fiyat bilgisi almak istiyorum.`}
                className="flex-1 bg-green-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm hover:bg-green-600 transition-colors active:scale-95 transition-transform"
            >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
            </a>
        </div>
    );
}
