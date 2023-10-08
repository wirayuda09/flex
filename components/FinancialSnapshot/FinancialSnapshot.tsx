import Image from 'next/image';
import LeftContent from './LeftContent';

export default function FinancialSnapshot() {
	return (
		<section className='mt-28 flex h-full w-full flex-wrap items-center justify-around gap-10 p-5 md:p-0'>
			<LeftContent />
			<div className='w-full max-w-lg'>
				<Image
					className='w-full object-contain'
					src={'/assets/images/Cards.png'}
					width={500}
					height={500}
					alt='Card images'
				/>
			</div>
		</section>
	);
}
