import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors: {
        'home-base1': '#222831',
        'home-base2': '#393E46',
        'home-hl1': '#00ADB5',
        'home-hl2': '#EEEEEE',
        'blog-base1': '#243763',
        'blog-base2': '#FF6E31',
        'blog-hl1': '#FFEBB7',
        'blog-hl2': '#AD8E70',
      },
    }
  },
  plugins: [],
}
export default config
