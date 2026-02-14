import type { Metadata } from "next";
import { Inter, Allura, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    display: "swap",
    variable: "--font-inter",
});

const allura = Allura({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
    variable: "--font-allura",
});

const cinzel = Cinzel({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-cinzel",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
    variable: "--font-cormorant",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://serena-davet-evi.com"),
    title: "Serena Organizasyon ve Davet Evi | Antalya",
    description:
        "Antalya Kepez'de 200 kişilik boutique davet salonu. Söz, nişan, kına gecesi, baby shower ve doğum günü organizasyonları. Hayallerinizi zarafetle buluşturuyoruz.",
    keywords: [
        "antalya davet salonu",
        "kepez davet evi",
        "söz mekanı antalya",
        "nişan organizasyonu antalya",
        "kına gecesi mekanı",
        "serena davet evi",
        "organizasyon evi antalya",
        "butik davet salonu",
    ],
    openGraph: {
        title: "Serena Organizasyon ve Davet Evi | Antalya",
        description:
            "Hayallerinizi zarafetle buluşturuyoruz. Söz, nişan, kına ve doğum günü organizasyonları için Kepez'deyiz.",
        type: "website",
        locale: "tr_TR",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="tr" className={`${inter.variable} ${allura.variable} ${cinzel.variable} ${cormorant.variable}`}>
            <body className={`${inter.className} antialiased`}>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "EventVenue",
                            "name": "Serena Davet Evi",
                            "description":
                                "Antalya Kepez'de 200 kişilik boutique davet salonu. Söz, nişan, kına gecesi, baby shower ve doğum günü organizasyonları.",
                            "image": "https://serena-davet-evi.com/og-image.jpg",
                            "telephone": "+90 530 725 07 51",
                            "priceRange": "₺₺",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Barış Manço Blv. No:184 BA",
                                "addressLocality": "Kepez",
                                "addressRegion": "Antalya",
                                "postalCode": "07090",
                                "addressCountry": "TR",
                            },
                            "geo": {
                                "@type": "GeoCoordinates",
                                "latitude": 36.938729,
                                "longitude": 30.6775152,
                            },
                            "openingHoursSpecification": {
                                "@type": "OpeningHoursSpecification",
                                "dayOfWeek": [
                                    "Monday",
                                    "Tuesday",
                                    "Wednesday",
                                    "Thursday",
                                    "Friday",
                                    "Saturday",
                                    "Sunday",
                                ],
                                "opens": "10:00",
                                "closes": "23:00",
                            },
                            "maximumAttendeeCapacity": 200,
                            "sameAs": [
                                "https://www.instagram.com/serena.davetevi",
                            ],
                        }),
                    }}
                />
            </body>
        </html>
    );
}
