'use client';

import Image from 'next/image';
import { useState } from 'react';

import NavbarLists from './Lists';

export default function NavbarWrapper() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<NavbarLists isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='flex items-center gap-x-3'>
				<button className='truncate rounded border border-lineGray bg-dark2 px-3 py-2 text-xs md:px-9 md:py-4'>
					Buy Template
				</button>
				<button onClick={() => setIsOpen(true)} className='lg:hidden'>
					<Image
						alt='menu icon'
						src={'/assets/icons/menu.svg'}
						width={40}
						height={40}
					/>
				</button>
			</div>
		</>
	);
}
