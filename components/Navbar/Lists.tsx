'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';

import { navLinks } from '@/constant';

type NavbarListsProps = {
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function NavbarLists({ isOpen, setIsOpen }: NavbarListsProps) {
	return (
		<ul
			className={`ease fixed top-0 flex h-screen w-full flex-col items-center justify-evenly gap-x-60 bg-dark transition-all duration-500 lg:sticky lg:mx-auto lg:h-auto lg:flex-row lg:justify-center lg:bg-transparent ${
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
				<Image
					src={'/assets/icons/close.svg'}
					alt='close icon'
					width={20}
					height={20}
				/>
			</button>
		</ul>
	);
}
