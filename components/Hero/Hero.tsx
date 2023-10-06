import Image from 'next/image';

import HeroText from './HeroText';

export default function Hero() {
	return (
		<section className='h-full w-full'>
			<div className='flex h-full max-h-full w-full flex-wrap justify-center gap-10 p-5'>
				<HeroText />
				<div className='w-full max-w-lg self-center'>
					<Image
						className='h-full w-full object-cover'
						src={'/assets/images/right-image-hero.png'}
						width={500}
						height={500}
						alt='Hero image'
					/>
				</div>
			</div>
		</section>
	);
}
