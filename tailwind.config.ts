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
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				lightWhite: '#EBF1FF',
				lightBlue: '#B3C0DE',
				lightBlue2: '#26B1FF',
				primaryBlue: '#27B1FF',
				primaryBlue2: '#1557FF',
				primaryLightBlue: '#1F4290',
				dark: '#080812',
				dark2: '#111323',
				lineGray: '#26293C',
				lightGray: '#C2CDE7',
				gray: '#8A96B1',
			},
			fontSize: {
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
		},
	},
	plugins: [],
};
export default config;
