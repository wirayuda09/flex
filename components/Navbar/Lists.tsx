'use client';

import Link from 'next/link';

import { navLinks } from '@/constant';
import type { Dispatch, SetStateAction } from 'react';

type NavbarListsProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarLists({ isOpen, setIsOpen }: NavbarListsProps) {
	return (
		<ul
			className={`ease fixed top-0 flex h-screen w-full flex-col items-center justify-evenly gap-x-60 transition-all duration-500 lg:sticky lg:mx-auto lg:flex-row lg:justify-center lg:bg-transparent ${
				isOpen ? 'left-0' : '-left-full'
			}`}
		>
			{navLinks.map((link) => (
				<li key={link.title}>
					<Link href={link.link}>{link.title}</Link>
				</li>
			))}
			<button
				className='absolute right-5 top-5 lg:hidden'
				onClick={() => setIsOpen(false)}
			>
				X
			</button>
		</ul>
	);
}
