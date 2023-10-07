import { testimonialsData } from '@/constant';
import Card from './Card';

export default function Testimonial() {
	return (
		<section className='mt-64 flex w-full flex-col items-center p-5'>
			<p className='text-center text-sm text-primaryBlue'>Testimonials</p>
			<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-center text-3xl font-bold text-transparent md:text-5xl'>
				Satisfied voices of success
			</h2>
			<div className='mt-20 flex min-h-400 w-full snap-x snap-mandatory items-center justify-between gap-28 overflow-x-auto md:mt-28'>
				{testimonialsData.map((data) => (
					<Card {...data} key={data.author} />
				))}
			</div>
		</section>
	);
}
