/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@cyberbowl/config-lib/tailwind.config.js')],
    content: [
        './src/**/*.{html,js,ts,jsx,tsx,vue}',
        '../../packages/canvas-lib/src/**/*.{html,js,ts,jsx,tsx,vue}',
        '../../packages/ui-lib/src/**/*.{html,js,ts,jsx,tsx,vue}',
    ],
};
