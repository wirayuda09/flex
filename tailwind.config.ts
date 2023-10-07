import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				linear:
					'linear-gradient(99deg, rgba(43, 53, 87, 0.00) 18.22%, rgba(26, 31, 54, 0.40) 47.59%, rgba(19, 20, 38, 0.00) 82.33%)',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				lightWhite: '#EBF1FF',
				lightBlue: '#B3C0DE',
				lightBlue2: '#26B1FF',
				lightBlue3: '#3549FF',
				primaryBlue: '#27B1FF',
				primaryBlue2: '#1557FF',
				primaryLightBlue: '#1F4290',
				dark: '#080812',
				dark2: '#111323',
				lineGray: '#26293C',
				lightGray: '#C2CDE7',
				gray: '#8A96B1',
				orange: '#FF603E',
			},
			fontSize: {
				15: '15px',
				28: '28px',
				46: '46px',
				64: '64px',
			},
			width: {
				200: '200px',
			},
			gap: {
				60: '60px',
			},
			minWidth: {
				200: '200px',
				423: '423px',
			},
			minHeight: {
				30: '30px',
				300: '300px',
				371: '371px',
				400: '400px',
				500: '500px',
			},
			maxWidth: {
				200: '200px',
				350: '350px',
			},
		},
	},
	plugins: [],
};
export default config;
