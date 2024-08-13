/* eslint-disable eol-last */
/* eslint-disable global-require */
/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Website colors here
                primary: "#E56742",
                secondary: "#002147",
                customGreen: "#00CD90",
            },
            daisyui: {
                themes: ["light", "dark", "cupcake"],
            },
        },
    },
    // eslint-disable-next-line import/no-extraneous-dependencies
    plugins: [require("daisyui")],
};