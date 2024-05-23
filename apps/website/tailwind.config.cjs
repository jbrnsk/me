/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@cyberbowl/config-lib/tailwind.config.cjs')],
    content: [
        './src/**/*.{html,js,ts,jsx,tsx,vue}',
        '../../packages/canvas-lib/src/**/*.{html,js,ts,jsx,tsx,vue}',
    ],
};
