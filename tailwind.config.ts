import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      screens: {
        'crcs': '320px',
        'xs': '360px',
      },
      fontSize: {
        '35xl': '2.5rem', // 256px
        '10xl': '14rem',  // 256px
        '11xl': '19rem',
      },
    },
  },
  plugins: [],
};

export default config;


