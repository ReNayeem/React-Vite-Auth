# React + Vite
https://reactrouter.com/en/main/start/tutorial
npm create vite@latest name-of-your-project -- --template react
npm install react-router-dom localforage match-sorter sort-by
npm run dev

docker setup
check vite.config.js
dockerfile
don't use .dockerignore

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


firebase setup
install: npm i firebase
create firebase folder and create firebase.config.js file paste the data.


for props error ignore add in .eslintrc.cjs file
'react/prop-types': 'off'
this





https://web.programming-hero.com/update-1/video/update-1-58-2-set-basic-layout-for-footer-and-header-