const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js,ts,jsx,tsx,vue}',
    ],
    theme: {
        fontSize: {
            xs: '12px',
            sm: '14px',
            base: '16px',
            lg: '18px',
            xl: '20px',
            '2xl': '24px',
            '3xl': '30px',
            '4xl': '40px',
            '5xl': '50px',
            '6xl': '60px',
            '7xl': '70px'
        },
        screens: {
            'sm': '641px',
            'md': '769px',
            'lg': '1025px',
            'xl': '1281px',
        },
    },
};
