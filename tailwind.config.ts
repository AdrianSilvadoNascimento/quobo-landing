import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1E40AF',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light'],
  },
};

export default config;
