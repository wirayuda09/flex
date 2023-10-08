import Image from 'next/image';

import { featuredCompanies } from '@/constant';

export default function FeaturedCompany() {
	return (
		<section className='my-28 inline-flex h-44 w-full snap-mandatory items-center gap-10 overflow-x-auto'>
			{featuredCompanies.map((featuredCompany) => (
				<div
					key={featuredCompany}
					className='flex min-h-30 w-full min-w-200 items-center border-l border-lineGray pl-5 md:px-16'
				>
					<Image
						className='w-full object-cover object-center'
						src={featuredCompany}
						alt='company logo'
						width={50}
						height={50}
					/>
				</div>
			))}
		</section>
	);
}
