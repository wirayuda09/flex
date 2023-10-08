import { frequentlyAskedQuestions } from '@/constant';
import FaqItem from './FaqItem';

export default function FAQ() {
	return (
		<section className='mt-28 flex min-h-screen w-full flex-wrap items-center justify-center gap-20 p-5'>
			<div className='max-w-xl'>
				<p className='text-15 font-normal text-primaryBlue'>
					Frequently Asked Questions
				</p>
				<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text py-[17px] text-4xl font-bold text-transparent md:text-5xl lg:text-6xl'>
					Your SaaS solutions guide
				</h2>
				<p className='text-base leading-relaxed text-lineGray  md:text-xl'>
					We understand that you may have some queries before making a decision,
					and we are here to provide you with all the answers you need.
				</p>
			</div>
			<ul className='flex w-full max-w-xl flex-col gap-8 space-y-6'>
				{frequentlyAskedQuestions.map((faq) => (
					<FaqItem key={faq.question} question={faq.question} />
				))}
			</ul>
		</section>
	);
}
