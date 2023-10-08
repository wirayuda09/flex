import Image from 'next/image';

export default function RightTextContent() {
	return (
		<div className='w-full max-w-xl'>
			<p className='text-15 text-primaryBlue'>Customizable Assets</p>
			<h3 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-3xl font-bold leading-relaxed text-transparent md:text-[46px]'>
				Customize and publish anything quickly
			</h3>
			<div className='mt-10 flex flex-col gap-y-7'>
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
				<button className='mt-9 inline-flex h-14 w-40 items-center justify-evenly rounded bg-gradient-to-r from-lightBlue2 to-primaryBlue2 text-white lg:w-200'>
					Get Started
				</button>
			</div>
		</div>
	);
}
