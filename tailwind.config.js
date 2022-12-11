/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--primary) / <alpha-value>)',
                greenish: 'rgb(var(--greenish) / <alpha-value>)',
                purplish: 'rgb(var(--purplish) / <alpha-value>)',
                orangish: 'rgb(var(--orangish) / <alpha-value>)',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [],
};
