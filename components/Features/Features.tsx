import { features } from '@/constant';
import FeatureCard from './Card';

export default function Features() {
	return (
		<section className=' mt-20 flex h-full flex-col items-center justify-center p-5'>
			<div className='mx-auto w-full p-3 text-center'>
				<p className='text-sm text-primaryBlue'>Powerful Features</p>
				<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-3xl font-bold text-transparent md:text-5xl lg:text-64'>
					Cutting-Edge features for your success
				</h2>
				<p className='mx-auto max-w-4xl py-7 text-sm font-normal text-gray md:text-base lg:text-lg'>
					Discover a comprehensive suite of cutting-edge features meticulously
					designed to accelerate your business success.
				</p>
				<div className=' mx-auto mt-20 flex w-full flex-wrap justify-center gap-24'>
					{features.map((feature) => (
						<FeatureCard {...feature} key={feature.title} />
					))}
				</div>
			</div>
		</section>
	);
}
