'use client';

import { useState } from 'react';

const statisticTabs = ['Payment', 'Tracking', 'Conversion'];

export default function Tab() {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	return (
		<div className='mt-12 flex items-center justify-evenly gap-5 rounded border border-lineGray p-1 [&>*:nth-child(2)]:border-r [&>*:nth-child(2)]:border-lineGray'>
			{statisticTabs.map((tab, i) => (
				<button
					onClick={() => setActiveIndex(i)}
					key={tab}
					className={`w-full truncate rounded px-2 py-4 text-xs transition-all duration-500 ease-in-out hover:bg-dark2 md:px-5 md:text-sm ${
						activeIndex === i ? 'bg-dark2' : ''
					}`}
				>
					{tab}
				</button>
			))}
		</div>
	);
}
