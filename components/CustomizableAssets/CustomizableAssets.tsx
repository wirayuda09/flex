import DiamonCard from './DiamonCard';
import RightTextContent from './RightTextContent';

export default function CustomizableAssets() {
	return (
		<div className='relative h-full w-full'>
			<div className=' flex h-screen flex-wrap items-center justify-center  gap-x-24 gap-y-32 p-5 md:p-10'>
				<div className='absolute bottom-0 right-0 z-[0] h-40 w-40 overflow-hidden bg-primaryLightBlue blur-[100px]'></div>
				<DiamonCard />
				<RightTextContent />
			</div>
		</div>
	);
}
