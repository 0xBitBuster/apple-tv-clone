/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            sans: [
                "SF Pro Display",
                "Helvetica Neue",
                "Helvetica",
                "Arial",
                "sans-serif",
            ],
        },
        keyframes: {
            "carousel-move": {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-100%)" },
            },
        },
        animation: {
            "carousel-move": "carousel-move var(--duration,80s) infinite",
        },
        extend: {
            colors: {
                background: "#000",
                backgroundContrast: "#111",
                black: "#1d1d1f"
            },
        },
    },
    plugins: [],
};
