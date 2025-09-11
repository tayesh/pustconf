/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
                primary: '#923330',
            },
        },
    },
    plugins: [
      require('daisyui'),
    ],
}

