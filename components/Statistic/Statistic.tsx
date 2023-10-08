import Image from 'next/image';

import StatisticTitle from './Title';

export default function Statistic() {
	return (
		<section>
			<div className='mx-auto max-w-7xl p-3'>
				<StatisticTitle />
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
					<div className='absolute -top-28 left-0 z-[9] h-24 w-24 overflow-hidden bg-primaryLightBlue blur-[180px] md:h-32 md:w-32'></div>
					<div className='absolute bottom-16 right-24 z-[9] h-32 w-32 overflow-hidden bg-primaryLightBlue blur-[120px]'></div>
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
