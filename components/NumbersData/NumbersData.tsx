import { numbersData } from '@/constant';

export default function NumbersData() {
	return (
		<div className=' mx-auto h-full w-full max-w-7xl bg-linear'>
			<div className='mt-32 flex h-full min-h-371 w-full flex-wrap items-center gap-40 p-10  md:justify-between'>
				<div className='max-w-xs'>
					<h2 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-5xl font-bold text-transparent '>
						Driving success with data
					</h2>
				</div>
				<div className='flex w-full max-w-2xl flex-col items-start justify-center gap-5  md:flex-row'>
					{numbersData.map((data) => (
						<div className=' w-full max-w-200' key={data.data}>
							<h3 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-5 text-left text-5xl font-semibold text-transparent lg:text-6xl'>
								{data.data}
							</h3>
							<p className='pt-3 text-left text-15 font-normal text-gray'>
								{data.text}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
