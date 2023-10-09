/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				screen: ['100vh /* fallback for Opera, IE and etc. */', '100svh']
			}
		}
	},
	plugins: [require('daisyui')]
};
