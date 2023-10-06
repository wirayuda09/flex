import Image from 'next/image';
import RightTextContent from './RightTextContent';

export default function CustomizableAssets() {
	return (
		<div className='relative mt-32 h-full w-full'>
			<div className=' flex h-full flex-wrap items-center justify-center  gap-x-24 gap-y-32 p-5 md:p-10'>
				<div className='absolute bottom-5 right-5 z-[0] h-40 w-40 overflow-hidden bg-primaryLightBlue blur-[100px]'></div>
				<Image
					className='max-w-xl object-cover'
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
