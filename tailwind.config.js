/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                customBlue: '#29B2FF',
                lightBlue: '#29B2FF',
            },
            width: {
                customWidth: '2px',
            },
        },
    },
    plugins: [],
}