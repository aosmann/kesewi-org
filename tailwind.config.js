/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dark-bg': '#000', // Pure black background
                'dark-secondary': '#111', // Slightly lighter black for sections
                'neon-accent': '#FFC700', // Yellowish-orange accent
                'light-border': '#222', // Light border color
                'light-gray-border': '#444', // Light gray for hover border
            },
            fontFamily: {
                'sans': ['"SF Pro Display"', 'sans-serif', 'system-ui', 'sans-serif'],
            },
            borderColor: {
                'light-border': '#222', // Define border color here as well
                'light-gray-border': '#444', // Define hover border color
            },
        },
    },
    plugins: [],
}
