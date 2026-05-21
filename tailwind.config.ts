import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        indigoDeep: '#1E255E',
        goldWarm: '#D7A84A',
        creamSoft: '#F6EFE3',
        charcoal: '#151820',
        sageMuted: '#98B08C',
      },
      boxShadow: {
        soft: '0 16px 42px rgba(10, 16, 40, 0.24)',
      },
      backgroundImage: {
        heroGradient: 'radial-gradient(circle at 15% 15%, rgba(215,168,74,.16), transparent 40%), radial-gradient(circle at 85% 5%, rgba(152,176,140,.16), transparent 45%), linear-gradient(180deg, #0f1433 0%, #151820 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
