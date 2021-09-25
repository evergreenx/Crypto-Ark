module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },

        colors: {
            transparent: 'transparent',
            'primary-brand' : '#e35f21'

            },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
