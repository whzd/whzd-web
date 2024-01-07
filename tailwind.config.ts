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
        'blog-base1': '#363062',
        'blog-base2': '#4D4C7D',
        'blog-hl1': '#F99417',
        'blog-hl2': '#EEEEEE',
        'projects-base1': '#2C3639',
        'projects-base2': '#3F4E4F',
        'projects-hl1': '#A27B5C',
        'projects-hl2': '#EEEEEE',
      },
    }
  },
  plugins: [],
}
export default config
