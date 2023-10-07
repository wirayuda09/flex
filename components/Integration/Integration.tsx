import Image from 'next/image';

export default function Integration() {
	return (
		<section className='mt-32 p-5'>
			<div className='mx-auto max-w-2xl'>
				<p className='text-center text-sm text-primaryBlue'>Integration</p>
				<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text py-[14px] text-center text-3xl font-bold text-transparent md:text-5xl'>
					Unifying your business tools
				</h2>
				<p className='text-center text-base font-normal text-gray'>
					We specialize in unifying your essential business tools and
					applications, creating a harmonious ecosystem that streamlines your
					operations and maximizes efficiency.
				</p>
				<div className='relative mt-10 h-full min-h-400 w-full md:mt-16'>
					<div className='absolute inset-y-0 left-0 z-10 w-[60%] bg-gradient-to-r from-dark bg-cover bg-no-repeat'></div>
					<div className='absolute inset-y-0 right-0 z-10 w-[60%] bg-gradient-to-l from-dark bg-cover bg-no-repeat'></div>
					<Image
						fill
						className='mx-auto object-contain'
						src={'/assets/images/Logos.png'}
						alt='logos'
					/>
				</div>
			</div>
		</section>
	);
}
