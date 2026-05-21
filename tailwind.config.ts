import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        indigoDeep: '#1E255E',
        goldWarm: '#D7A84A',
        creamSoft: '#FBF7EF',
        charcoal: '#1F2430',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(30, 37, 94, 0.10)',
      },
      backgroundImage: {
        radialGlow: 'radial-gradient(circle at top right, rgba(215,168,74,0.20), transparent 55%)',
      },
    },
  },
  plugins: [],
};

export default config;
