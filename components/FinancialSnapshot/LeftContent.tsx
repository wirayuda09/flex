import Image from 'next/image';

export default function LeftContent() {
	return (
		<div className='max-w-2xl'>
			<p className=' text-sm text-primaryBlue'>Financial Snapshot</p>
			<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-3xl font-bold text-transparent md:text-5xl lg:text-64'>
				SaaS solutions driving growth and efficiency
			</h2>
			<p className='py-7 text-sm font-normal text-gray md:text-base lg:text-lg'>
				SaaS financial models are documents that outline your SaaS business’s
				financial performance and projections for you and your investors.
			</p>
			<div className='flex flex-col gap-y-5'>
				<div className='inline-flex items-center gap-x-3'>
					<Image
						src={'/assets/icons/check.svg'}
						alt='check icon'
						width={24}
						height={24}
					/>
					<p className='text-sm'>Scale your business and sales model.</p>
				</div>
				<div className='inline-flex items-center gap-x-3'>
					<Image
						src={'/assets/icons/check.svg'}
						alt='check icon'
						width={24}
						height={24}
					/>
					<p className='text-sm'>
						Lorem ipsum dolor sit amet, consectetur adipiscing.
					</p>
				</div>
				<div className='inline-flex items-center gap-x-3'>
					<Image
						src={'/assets/icons/check.svg'}
						alt='check icon'
						width={24}
						height={24}
					/>
					<p className='text-sm'>Scale your business with sales assembly.</p>
				</div>
			</div>
		</div>
	);
}
