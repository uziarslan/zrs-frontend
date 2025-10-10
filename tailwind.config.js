/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#295860',
                    light: '#2C5773',
                    dark: '#1E1515',
                },
                gold: {
                    DEFAULT: '#BD925C',
                    dark: '#654721',
                    light: '#B19360',
                },
                accent: {
                    gray: '#757676',
                    lightGray: '#ACACAC',
                }
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-in-out',
                slideUp: 'slideUp 0.6s ease-out',
                slideDown: 'slideDown 0.6s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideDown: {
                    '0%': { opacity: '0', transform: 'translateY(-30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}

