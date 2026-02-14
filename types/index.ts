export interface ThemeConfig {
    primary: string;
    secondary: string;
    background: string;
    radius: string;
}

export interface HeroContent {
    headline: string;
    subhead: string;
    capacityBadge: string;
    ctaPrimary: string;
    ctaSecondary: string;
}

export interface Service {
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    text: string;
    author: string;
    rating: number;
}

export interface SeoConfig {
    title: string;
    description: string;
    keywords: string[];
    schemaType: string;
    geo: {
        latitude: number;
        longitude: number;
    };
}

export interface SiteConfig {
    business: string;
    slogan: string;
    capacity: string;
    phone: string;
    whatsapp: string;
    instagram: string;
    address: string;
    district: string;
    city: string;
    googleMapsUrl: string;
    googleMapsEmbed: string;
    theme: ThemeConfig;
    hero: HeroContent;
    services: Service[];
    testimonials: Testimonial[];
    seo: SeoConfig;
    footer: {
        closing: string;
        copyright: string;
    };
}
