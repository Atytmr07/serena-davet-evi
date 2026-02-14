"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Instagram, Play, ArrowRight, ArrowLeft, Image as ImageIcon, X } from "lucide-react";

// Stories Data (10 items as requested)
const stories = [
    { id: 0, type: "video", src: "/videos/day0.mp4", thumb: "https://images.unsplash.com/photo-1519741497674-611481863552", title: "Başlangıç" },
    { id: 1, type: "video", src: "/videos/day1.mp4", thumb: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3", title: "1. Gün" },
    { id: 2, type: "video", src: "/videos/day2.mp4", thumb: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9", title: "2. Gün" },
    { id: 3, type: "video", src: "/videos/day3.mp4", thumb: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2", title: "3. Gün" },
    { id: 4, type: "video", src: "/videos/day4.mp4", thumb: "https://images.unsplash.com/photo-1519225421980-715cb0202128", title: "4. Gün" },
    { id: 5, type: "video", src: "/videos/day5.mp4", thumb: "https://images.unsplash.com/photo-1695130485987-a2f03f75727f", title: "5. Gün" },
    { id: 6, type: "video", src: "/videos/day6.mp4", thumb: "https://images.unsplash.com/photo-1469334031218-e382a71b716b", title: "6. Gün" },
    { id: 7, type: "video", src: "/videos/day7.mp4", thumb: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8", title: "7. Gün" },
    { id: 8, type: "video", src: "/videos/day8.mp4", thumb: "https://images.unsplash.com/photo-1505932794465-147d1f1b2c97", title: "8. Gün" },
    { id: 9, type: "video", src: "/videos/day9.mp4", thumb: "https://images.unsplash.com/photo-1519741497674-611481863552", title: "Büyük Gün" },
];

// Venue Showcase Data
const venuePhotos = [
    { id: 1, src: "/images/gallery/foto1.jpg", span: "col-span-1 md:col-span-2 row-span-2" },
    { id: 2, src: "/images/gallery/foto3.jpeg", span: "col-span-1 row-span-1" },
    { id: 3, src: "/images/gallery/foto5.jpeg", span: "col-span-1 row-span-1" },
    { id: 4, src: "/images/gallery/foto2.jpg", span: "col-span-1 md:col-span-2 row-span-1" },
    { id: 5, src: "/images/gallery/foto4.jpeg", span: "col-span-1 row-span-1" },
    { id: 6, src: "/images/gallery/foto6.jpeg", span: "col-span-1 row-span-1" },
    { id: 7, src: "/images/gallery/foto7.jpeg", span: "col-span-1 row-span-1" },
    { id: 8, src: "/images/gallery/foto8.jpeg", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    // Mouse Drag Logic
    const handleMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    // Video Hover Logic (PC)
    const playVideo = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector("video");
        if (video) video.play().catch(() => { });
    };

    const pauseVideo = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector("video");
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    // Toggle Video on Click (Mobile/Desktop Tap)
    const toggleVideo = (e: React.MouseEvent<HTMLDivElement>) => {
        const video = e.currentTarget.querySelector("video");
        if (video) {
            if (video.paused) {
                video.play().catch(() => { });
            } else {
                video.pause();
            }
        }
    };

    return (
        <section id="galeri" className="py-24 bg-white relative">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <span className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase">
                    Serena Günlükleri
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2">
                    Galerimiz & <span className="text-gold-gradient">Hikayeler</span>
                </h2>
            </div>

            {/* 1. VENUE SHOWCASE SECTION (Moved Top) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-xl font-display font-semibold text-stone-900 border-l-4 border-gold-400 pl-3">
                        Salonumuzdan Kareler
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                    {venuePhotos.map((photo, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl overflow-hidden group ${photo.span} cursor-zoom-in h-full w-full`} // Ensure full width/height
                            onClick={() => setSelectedPhoto(photo.src)}
                        >
                            <Image
                                src={photo.src}
                                alt={`Antalya Davet Salonu - Fotoğraf ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 z-10" />
                            <div className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-stone-800 z-20">
                                <ImageIcon className="w-5 h-5" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. STORIES SECTION (Moved Bottom & Larger) */}
            <div className="relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex justify-between items-end">
                    <h3 className="text-xl font-display font-semibold text-stone-900 border-l-4 border-gold-400 pl-3">
                        Hikayemiz Başlıyor
                    </h3>
                    <div className="hidden md:flex text-sm text-stone-400 gap-2 items-center">
                        <ArrowLeft className="w-4 h-4" /> Tut ve Kaydır <ArrowRight className="w-4 h-4" />
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-12 scrollbar-hide cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >
                    {stories.map((story) => (
                        <div
                            key={story.id}
                            className="flex-shrink-0 snap-center relative w-[220px] md:w-[280px] aspect-[9/16] rounded-2xl overflow-hidden bg-stone-200 group border-[4px] border-white shadow-xl select-none transition-transform duration-300 hover:scale-[1.02]"
                            onMouseEnter={playVideo}
                            onMouseLeave={pauseVideo}
                            onClick={toggleVideo} // Mobile Tap Support
                        >
                            {/* Video */}
                            <video
                                src={`${story.src}#t=0.001`} // Force first frame
                                className="absolute inset-0 w-full h-full object-cover"
                                loop
                                muted
                                playsInline
                                preload="metadata"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors pointer-events-none" />

                            {/* Play Icon */}
                            <div className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 z-10 pointer-events-none">
                                <Play className="w-4 h-4 text-white fill-current" />
                            </div>

                            {/* Bottom Gradient for text visibility */}
                            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                        </div>
                    ))}
                    {/* Padding spacer */}
                    <div className="w-8 flex-shrink-0" />
                </div>

                <div className="text-center mt-4">
                    <a
                        href="https://instagram.com/serena.davetevi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:-translate-y-1 transition-all"
                    >
                        <Instagram className="w-5 h-5" />
                        Tüm Hikayeyi Instagram&apos;da İzle
                    </a>
                </div>
            </div>

            {/* Image Modal (Lightbox) */}
            {selectedPhoto && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in"
                    onClick={() => setSelectedPhoto(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors duration-300"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div
                        className="relative max-w-full max-h-full flex items-center justify-center animate-fade-in-up"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                    >
                        <img
                            src={selectedPhoto}
                            alt="Galerimizden Kareler"
                            className="max-w-full max-h-[90dvh] object-contain rounded-lg shadow-2xl border border-white/10"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
