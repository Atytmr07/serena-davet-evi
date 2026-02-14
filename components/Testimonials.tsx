import { siteConfig } from "@/data/config";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section
            id="yorumlar"
            className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-b from-cream-50 via-powder-pink-50/20 to-cream-50" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase">
                        Müşteri Yorumları
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 mt-3 mb-4">
                        Misafirlerimiz{" "}
                        <span className="text-gold-gradient">Ne Diyor?</span>
                    </h2>
                    <div className="section-divider mt-6" />
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {siteConfig.testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass-card rounded-2xl p-8 relative group hover:shadow-xl hover:shadow-gold-400/10 transition-all duration-500"
                        >
                            {/* Quote Icon */}
                            <Quote className="w-10 h-10 text-gold-200 mb-6 group-hover:text-gold-400 transition-colors duration-300" />

                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array.from({ length: testimonial.rating }).map(
                                    (_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 text-gold-400 fill-gold-400"
                                        />
                                    )
                                )}
                            </div>

                            {/* Review Text */}
                            <p className="text-stone-700 text-lg leading-relaxed mb-6 italic">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-powder-pink-200 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                        {testimonial.author.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <p className="font-semibold text-stone-900">
                                        {testimonial.author}
                                    </p>
                                    <p className="text-sm text-gold-500">
                                        Google Yorumu
                                    </p>
                                </div>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-gold-400/5 to-transparent rounded-tr-2xl" />
                        </div>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <div className="text-center mt-12">
                    <p className="text-stone-500">
                        Google&apos;da <span className="text-gold-500 font-semibold">5.0</span> puan ile değerlendiriliyoruz ⭐
                    </p>
                </div>
            </div>
        </section>
    );
}
