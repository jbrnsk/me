/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@me/config-lib/tailwind.config.cjs')],
  content: [
    './src/**/*.{html,js,ts,jsx,tsx,vue}',
    '../../packages/ui-lib/src/**/*.{html,js,ts,jsx,tsx,vue}',
  ],
};
