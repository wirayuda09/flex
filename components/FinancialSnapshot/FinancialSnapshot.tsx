import Image from 'next/image';
import LeftContent from './LeftContent';

export default function FinancialSnapshot() {
	return (
		<section className='mt-10 flex h-full w-full flex-wrap items-center justify-center gap-10 p-5'>
			<LeftContent />
			<div className='w-full max-w-lg'>
				<Image
					src={'/assets/images/Cards.png'}
					width={500}
					height={500}
					alt='Card images'
				/>
			</div>
		</section>
	);
}
