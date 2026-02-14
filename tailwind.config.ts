import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    50: "#FFF9E6",
                    100: "#FFF0BF",
                    200: "#FFE699",
                    300: "#FFD966",
                    400: "#D4AF37",
                    500: "#B8960F",
                    600: "#9A7D0A",
                    700: "#7C6408",
                    800: "#5E4B06",
                    900: "#403204",
                },
                "powder-pink": {
                    50: "#FFF5F5",
                    100: "#FFE8E8",
                    200: "#F4C2C2",
                    300: "#E8A0A0",
                    400: "#D4787A",
                    500: "#BF5B5D",
                },
                cream: {
                    50: "#FFFDF7",
                    100: "#FFF8E7",
                    200: "#FFF0D0",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
                serif: ["var(--font-cinzel)", "serif"],
                script: ["var(--font-allura)", "cursive"],
                display: ["var(--font-cinzel)", "serif"],
                logo: ["var(--font-cormorant)", "serif"],
            },
            animation: {
                "fade-in": "fadeIn 1s ease-out forwards",
                "fade-in-up": "fadeInUp 1s ease-out forwards",
                "fade-in-up-delay": "fadeInUp 1s ease-out 0.3s forwards",
                "image-reveal": "imageReveal 1.5s ease-out forwards",
                "float": "float 6s ease-in-out infinite",
                "pulse-gold": "pulseGold 3s ease-in-out infinite",
                "scroll": "scroll 2s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                imageReveal: {
                    "0%": { opacity: "0", transform: "scale(1.1)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                shimmer: {
                    "0%": { backgroundPosition: "-200% 0" },
                    "100%": { backgroundPosition: "200% 0" },
                },
                pulseGold: {
                    "0%, 100%": { boxShadow: "0 0 8px rgba(212,175,55,0.4)" },
                    "50%": { boxShadow: "0 0 24px rgba(212,175,55,0.7)" },
                },
                scroll: {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "50%": { opacity: "1", transform: "translateY(0)" },
                    "100%": { opacity: "0", transform: "translateY(10px)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
