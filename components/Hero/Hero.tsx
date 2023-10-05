import { avatars } from '@/constant';
import Image from 'next/image';

export default function Hero() {
	return (
		<section className='h-full w-full'>
			<div className=' flex h-screen w-full flex-wrap justify-center gap-10 p-5'>
				<div className='z-10 mt-20 max-w-2xl'>
					<div>
						<div className='absolute left-24 z-[9] h-60 w-60 overflow-hidden bg-[#1F4290] blur-[150px] lg:-top-20'></div>
						<p className='text-lg font-normal text-[#27B1FF]'>
							Empowering Your Business
						</p>
						<h2 className='bg-gradient-to-r from-[#EBF1FF] to-[#B3C0DE] bg-clip-text pt-[14px] text-5xl font-bold text-transparent lg:text-[64px]'>
							Powerful solutions for your business
						</h2>
						<p className='pt-7 text-base text-[#C2CDE7] lg:text-lg'>
							Welcome to Flex where we provide top-of-the-line software as a
							service (SaaS) solutions tailored to meet the unique needs of your
							business.
						</p>
						<div className='flex flex-wrap items-center gap-5'>
							<button className='mt-9 inline-flex h-14 w-40 items-center justify-center rounded bg-gradient-to-r from-[#26B1FF] to-[#1557FF] text-white lg:w-[200px]'>
								Start for Free
								<Image
									src={'/assets/icons/arrow.svg'}
									width={24}
									height={24}
									alt='arrow icon'
								/>
							</button>
							<div className='mt-7 flex items-center'>
								{avatars.map((avatar) => (
									<Image
										className='h-12 w-12 rounded-full'
										key={avatar}
										src={avatar}
										width={24}
										height={24}
										alt='profile'
									/>
								))}
							</div>
							<div>
								<p className='mt-6 block text-base font-normal text-[#C2CDE7]'>
									+4.7K Users
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className=' max-w-lg self-center'>
					<Image
						className='h-full w-full object-cover'
						src={'/assets/images/right-image-hero.png'}
						width={500}
						height={500}
						alt='Hero image'
					/>
				</div>
			</div>
		</section>
	);
}
