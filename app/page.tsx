import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StickyActionBar from "@/components/StickyActionBar";

export default function Home() {
    return (
        <main className="min-h-screen bg-cream-50">
            <Navbar />
            <Hero />
            <Services />
            <Gallery />
            <Testimonials />
            <Map />
            <Footer />
            <WhatsAppFloat />
            <StickyActionBar />
        </main>
    );
}
