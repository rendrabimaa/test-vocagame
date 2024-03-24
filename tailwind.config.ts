import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bluePrimary: '#20184E',
        blueSecondary: '#131167',
        blueThird: '#E5E7FD',
        blueForth: '#321AC7',
        blueToggle: '#4726CA',
        orangePrimary: '#D38122',
        orangeSecondary: '#FDECE3',
        greyPrimary: '#494949',
        greySecondary: '#666666',
        greyThird: '#E5EAFD',
        greyForth: '#E3E6FD',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
