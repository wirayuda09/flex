import Image from 'next/image';

import Users from './Users';

export default function LeftContent() {
	return (
		<div className='mt-20 max-w-2xl'>
			<div className='absolute top-0 h-60 w-60 bg-primaryLightBlue bg-gradient-radial blur-[150px]'></div>
			<p className='text-lg font-normal text-primaryBlue'>
				Empowering Your Business
			</p>
			<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-5xl font-bold text-transparent lg:text-64'>
				Powerful solutions for your business
			</h2>
			<p className='pt-7 text-base text-lightGray lg:text-lg'>
				Welcome to Flex where we provide top-of-the-line software as a service
				(SaaS) solutions tailored to meet the unique needs of your business.
			</p>
			<div className='flex flex-wrap items-center gap-5'>
				<button className='mt-9 inline-flex h-14 w-40 items-center justify-evenly rounded bg-gradient-to-r from-lightBlue2 to-primaryBlue2 text-white lg:w-200'>
					Start for Free
					<Image
						src={'/assets/icons/arrow.svg'}
						width={24}
						height={24}
						alt='arrow icon'
					/>
				</button>
				<Users />
			</div>
		</div>
	);
}
