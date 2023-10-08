import Image from 'next/image';
import RightTextContent from './RightTextContent';

export default function CustomizableAssets() {
	return (
		<div className='relative mt-32 min-h-full w-full overflow-hidden xl:overflow-visible'>
			<div className='flex h-full flex-wrap items-center justify-center gap-x-24 gap-y-32 p-5 md:p-10 lg:justify-around'>
				<div className='absolute bottom-5 right-0 h-40 w-40 bg-primaryLightBlue blur-[150px]'></div>
				<div className=' absolute -right-0 bottom-20 hidden h-40 w-40 bg-primaryLightBlue blur-[80px] lg:block'></div>
				<Image
					className='mx-auto h-full w-full max-w-xl object-cover'
					src={'/assets/images/diamond-card.png'}
					width={700}
					height={700}
					alt='card'
				/>
				<RightTextContent />
			</div>
		</div>
	);
}
