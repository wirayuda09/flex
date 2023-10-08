import Card from './Card';
import { pricingPlans } from '@/constant';

export default function Pricing() {
	return (
		<section className='mt-28 flex flex-col items-center p-5 md:p-0'>
			<div className='mx-auto max-w-xl'>
				<p className='text-center text-15 text-primaryBlue'>Flexible Pricing</p>
				<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-center text-3xl font-bold text-transparent md:text-5xl'>
					Choose the right fit for your business
				</h2>
			</div>
			<div className='mt-12 flex w-full flex-wrap justify-evenly gap-10'>
				{pricingPlans.map((pricing) => (
					<Card key={pricing.title} {...pricing} />
				))}
			</div>
		</section>
	);
}
