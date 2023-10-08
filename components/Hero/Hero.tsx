import Image from 'next/image';

import LeftContent from './LeftContent';

export default function Hero() {
	return (
		<section className='h-full w-full'>
			<div className='flex h-full max-h-full w-full flex-wrap items-center justify-between gap-10 p-5 md:p-8'>
				<LeftContent />
				<div className='w-full max-w-lg self-center'>
					<Image
						className='h-full w-full object-cover'
						src={'/assets/images/right-image-hero.png'}
						width={500}
						height={500}
						priority
						fetchPriority='high'
						alt='Hero image'
					/>
				</div>
			</div>
		</section>
	);
}
