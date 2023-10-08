'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function FaqItem({ question }: { question: string }) {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const ref = useRef<HTMLImageElement>(null);

	const handleClick = () => {
		if (ref.current) {
			ref.current.classList.toggle('rotate-45');
			setIsExpanded(!isExpanded);
		}
	};
	return (
		<li
			className={`ease w-full border-b border-lineGray pb-5 text-sm font-medium text-lightGray transition-all duration-300 md:text-xl ${
				isExpanded ? 'h-full' : 'min-h-30'
			} `}
		>
			<div className='mb-5 flex items-center justify-between gap-x-4'>
				{question}
				<button onClick={handleClick}>
					<Image
						className='ease transition-all duration-300'
						ref={ref}
						src={'/assets/icons/plus.svg'}
						width={24}
						height={24}
						alt='plus icon'
					/>
				</button>
			</div>
			<p
				className={`h-0 text-15 text-gray opacity-0 transition-all duration-300  ${
					isExpanded ? 'animate-expand' : ''
				}`}
			>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, tempore
				soluta odio sapiente quibusdam sint, aspernatur, culpa eos commodi nihil
				harum eius aut odit non ex! Nulla ex tempora impedit!
			</p>
		</li>
	);
}
