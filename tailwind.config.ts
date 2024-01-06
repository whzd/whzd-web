import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'home-base1': '#222831',
        'home-base2': '#393E46',
        'home-hl1': '#00ADB5',
        'home-hl2': '#EEEEEE',
        'blog-base1': '#2D3250',
        'blog-base2': '#424769',
        'blog-hl1': '#7077A1',
        'blog-hl2': '#F6B17A',
        'projects-base1': '#245953',
        'projects-base2': '#408E91',
        'projects-hl1': '#E49393',
        'projects-hl2': '#D8D8D8',
      },
    }
  },
  plugins: [],
}
export default config
