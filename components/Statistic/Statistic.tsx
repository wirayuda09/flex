import Image from 'next/image';

const statisticTabs = ['Payment', 'Tracking', 'Conversion'];

export default function Statistic() {
	return (
		<section>
			<div className='mx-auto max-w-7xl p-3'>
				<div className='mx-auto max-w-6xl'>
					<p className='text-center text-sm text-primaryBlue'>Flex Impact</p>
					<h2 className='mx-auto max-w-4xl bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-center text-2xl font-bold text-transparent md:text-5xl lg:text-46'>
						Empowering businesses with data-driven success
					</h2>
					<p className='mx-auto max-w-2xl py-5 text-center text-sm text-gray md:text-base'>
						Join the Flex revolution and experience the power of cutting-edge
						technology driving businesses to new heights. Embrace the future of
						software solutions today!
					</p>
					<div className='mt-12 flex items-center justify-evenly gap-5 rounded border border-lineGray p-1 [&>*:nth-child(1)]:bg-dark2 [&>*:nth-child(2)]:border-r [&>*:nth-child(2)]:border-lineGray'>
						{statisticTabs.map((tab) => (
							<button key={tab} className='w-full truncate rounded px-5 py-3'>
								{tab}
							</button>
						))}
					</div>
				</div>
				<div className='my-16 flex items-center justify-between'>
					<p className='inline-flex items-center gap-3 text-sm font-semibold text-lightGray md:text-xl'>
						<Image
							src={'/assets/icons/lightning.svg'}
							alt='lightning icon'
							width={24}
							height={24}
						/>
						Payment schedule
					</p>
					<p className=' text-sm font-normal text-gray md:text-base'>
						Last underwriting <span className='text-lightGray'>Jan 2023</span>
					</p>
				</div>
				<div className='relative w-full'>
					<div className='absolute bottom-16 right-24 z-[9] h-32 w-32 overflow-hidden bg-primaryLightBlue blur-[100px]'></div>
					<Image
						className='mx-auto w-full object-cover'
						src={'/assets/images/Graphic.png'}
						alt='chart'
						width={1000}
						height={900}
					/>
				</div>
			</div>
		</section>
	);
}
