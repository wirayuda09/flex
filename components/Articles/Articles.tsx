import { articles } from '@/constant';
import Card from './Card';

export default function Articles() {
	return (
		<section className='mt-28 flex flex-col items-center p-5 md:p-0'>
			<div className='mx-auto max-w-2xl'>
				<p className='text-center text-15 text-primaryBlue'>Our Blog</p>
				<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-center text-3xl font-bold text-transparent md:text-5xl'>
					Take a look at the latest articles from  
				</h2>
			</div>
			<div className='mt-16 flex w-full flex-wrap items-center justify-center gap-5'>
				{articles.map((article) => (
					<Card {...article} key={article.title} />
				))}
			</div>
		</section>
	);
}
