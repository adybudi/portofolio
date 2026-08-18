import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    darkMode: ['class', '[data-theme="dark"]'],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'deep-twilight': '#03045e',
                'french-blue': '#023e8a',
                'bright-teal': '#0077b6',
                'blue-green': '#0096c7',
                'turquoise-surf': '#00b4d8',
                'sky-aqua': '#48cae4',
                'frosted-blue': '#90e0ef',
                'frosted-blue-2': '#ade8f4',
                'light-cyan': '#caf0f8',
            },
        },
    },

    plugins: [forms({ strategy: 'class' }), daisyui],

    daisyui: {
        themes: [
            {
                dark: {
                    "primary": "#00b4d8",
                    "secondary": "#0077b6",
                    "accent": "#48cae4",
                    "neutral": "#023e8a",
                    "base-100": "#03045e",
                    "base-200": "#023e8a",
                    "base-300": "#0077b6",
                    "base-content": "#caf0f8",
                    "info": "#48cae4",
                    "success": "#0096c7",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
                light: {
                    "primary": "#023e8a",
                    "secondary": "#0077b6",
                    "accent": "#00b4d8",
                    "neutral": "#ade8f4",
                    "base-100": "#f4fbfe",
                    "base-200": "#caf0f8",
                    "base-300": "#ade8f4",
                    "base-content": "#03045e",
                    "info": "#0096c7",
                    "success": "#0077b6",
                    "warning": "#f59e0b",
                    "error": "#ef4444",
                },
            },
        ],
        darkTheme: "dark",
    },
};
