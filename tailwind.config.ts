import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'home-base1': '#222831',
      'home-base2': '#393E46',
      'home-hl1': '#00ADB5',
      'home-hl2': '#EEEEEE',
    }
  },
  plugins: [],
}
export default config
