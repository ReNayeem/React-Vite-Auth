# React + Vite
https://reactrouter.com/en/main/start/tutorial
npm create vite@latest name-of-your-project -- --template react
npm install react-router-dom localforage match-sorter sort-by

if want to use tailwind css
https://tailwindcss.com/docs/guides/vite
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

/** change this in @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

import this in index.css
@tailwind base;
@tailwind components;
@tailwind utilities;





https://web.programming-hero.com/update-1/video/update-1-58-2-set-basic-layout-for-footer-and-header-