import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
    business: "Serena Davet Evi",
    slogan: "Hayallerinizi zarafetle buluşturuyoruz",
    capacity: "200 Kişilik Salon",
    phone: "0530 725 07 51",
    whatsapp: "905307250751",
    instagram: "serena.davetevi",
    address: "Barış Manço Blv. No:184 BA, Kepez/Antalya",
    district: "Mazıdağı / Çankaya",
    city: "Kepez, Antalya",
    googleMapsUrl: "https://www.google.com/maps/place/Serena+Davet+Evi/@36.938729,30.6775152,17z/data=!3m1!4b1!4m6!3m5!1s0x14c38f27d24661c9:0xcad13696e84d8ea9!8m2!3d36.938729!4d30.6775152!16s%2Fg%2F11mynt5c6f?entry=ttu",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.5!2d30.6775152!3d36.938729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c38f27d24661c9%3A0xcad13696e84d8ea9!2sSerena%20Davet%20Evi!5e0!3m2!1str!2str!4v0",
    theme: {
        primary: "gold-400",
        secondary: "powder-pink-200",
        background: "cream-50",
        radius: "rounded-xl",
    },
    hero: {
        headline: "Hayallerinizi Zarafetle Buluşturuyoruz",
        subhead:
            "Söz, nişan, kına gecesi, baby shower ve doğum günü organizasyonlarında Antalya'nın en şık davet salonu.",
        capacityBadge: "200 Kişilik Salon",
        ctaPrimary: "WhatsApp'tan Fiyat Al",
        ctaSecondary: "Hemen Ara",
    },
    services: [
        {
            title: "Söz & Nişan Organizasyonu",
            description:
                "Hayatınızın en özel 'evet'ini zarif bir ortamda söyleyin. Gold detaylar, çiçek duvarları ve neon yazılarla hayalinizdeki söz & nişan burada.",
            icon: "Heart",
        },
        {
            title: "Kına Gecesi",
            description:
                "Bindallınızı giyip, tahtınıza oturun. Geleneksel kına gecenizi modern dokunuşlarla unutulmaz kılalım.",
            icon: "Crown",
        },
        {
            title: "Baby Shower & Cinsiyet Partisi",
            description:
                "Minik misafirinizi en tatlı sürprizlerle karşılayın. Pembe mi mavi mi? Heyecanı birlikte yaşayalım!",
            icon: "Baby",
        },
        {
            title: "Bride To Be (Bekarlığa Veda)",
            description:
                "Son kız kız geceniz Serena'da başlasın! Eğlenceli dekorlar, müzik ve kahkahalarla dolu bir gece sizi bekliyor.",
            icon: "PartyPopper",
        },
        {
            title: "Doğum Günü Kutlamaları",
            description:
                "Yaşınız kadar mum, katınız kadar neşe! Her yaşa özel temalı doğum günü organizasyonları.",
            icon: "Cake",
        },
    ],
    testimonials: [
        {
            text: "Tüm etkinliklerinizi eğlenceli ve rahat bir şekilde yapabileceğiniz Antalya'nın en iyi davet evi.",
            author: "Onur Bey",
            rating: 5,
        },
        {
            text: "Profesyonel organizasyon, özenli dekorasyon ve kaliteli hizmet.",
            author: "Sena Cigli",
            rating: 5,
        },
    ],
    seo: {
        title: "Antalya Davet Salonu - Serena Organizasyon ve Davet Evi | Kepez",
        description:
            "Antalya Kepez'de 200 kişilik şık organizasyon ve davet evi. Söz, nişan, kına gecesi, baby shower ve doğum günü organizasyonları. Mazıdağı/Çankaya bölgesinde hizmetinizdeyiz.",
        keywords: [
            "antalya davet salonu",
            "kepez davet evi",
            "söz mekanı antalya",
            "nişan organizasyonu antalya",
            "kına gecesi mekanı",
            "baby shower antalya",
            "doğum günü mekanı kepez",
            "serena organizasyon ve davet evi",
            "mazıdağı davet salonu",
            "çankaya davet evi antalya",
        ],
        schemaType: "EventVenue",
        geo: {
            latitude: 36.938729,
            longitude: 30.6775152,
        },
    },
    footer: {
        closing: "Antalya'nın kalbinde, zarafetle buluşuyoruz. Sizi de bekleriz.",
        copyright: `© ${new Date().getFullYear()} Serena Organizasyon ve Davet Evi. Tüm Hakları Saklıdır.`,
    },
};
