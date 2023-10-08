import './globals.css';

import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { Footer, Navbar } from '@/components';

const manrope = Manrope({
	subsets: ['latin'],
	preload: true,
	fallback: ['sans-serif'],
});

export const metadata: Metadata = {
	title: 'Flex',
	description: 'Powerful solutions for your business',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en'>
			<body className={`${manrope.className} h-full w-full bg-dark`}>
				<main className='mx-auto h-full w-full max-w-1440 bg-[url("/assets/images/Shapes.png")] bg-right-top bg-no-repeat'>
					<Navbar />
					{children}
					<Footer />
				</main>
			</body>
		</html>
	);
}
