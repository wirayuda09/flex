import Image from 'next/image';

export default function DiamonCard() {
	return (
		<div className="max-h-xl relative aspect-square h-full w-full max-w-[500px] rounded border border-dark bg-[url('/assets/images/lines.png')] bg-cover bg-center bg-no-repeat p-7">
			<div className='flex h-full w-full min-w-[170px] items-center'>
				<div className='absolute top-10 flex h-fit items-start justify-end'>
					<div className='rounded-full bg-lightBlue3 px-4 py-2'>Emre</div>
					<Image
						className='absolute -bottom-8 -right-10 mx-auto object-contain'
						src={'/assets/icons/cursor-blue.svg'}
						width={40}
						height={40}
						alt='diamond'
					/>
				</div>
				<Image
					className='mx-auto object-contain'
					src={'/assets/images/diamond.png'}
					width={300}
					height={300}
					alt='diamond'
				/>
				<div className='absolute bottom-28 right-5 flex h-fit items-start justify-end md:top-1/2'>
					<div className='rounded-full bg-orange px-4 py-2'>Chris</div>
					<Image
						className='absolute -left-10 -top-8 mx-auto object-contain'
						src={'/assets/icons/arrow-orange.svg'}
						width={40}
						height={40}
						alt='diamond'
					/>
				</div>
			</div>
			<div className='absolute bottom-6 left-0 flex w-full justify-between gap-x-10 '>
				<div className='relative h-14 w-full rounded-xl border border-dark2 bg-gradient-to-br from-dark to-dark md:h-32 md:w-[250px]'>
					<div className='absolute inset-y-5 mx-auto w-full bg-dark '>
						<div className=' mx-auto flex w-52 items-center justify-center overflow-hidden '>
							<Image
								fill
								className='hidden h-full w-full md:block'
								src={'/assets/icons/rectangle.svg'}
								alt='rect'
							/>
							<p className='absolute -top-2 left-1/3 text-center md:left-[18%] md:top-5 md:text-4xl '>
								Flex The
							</p>
						</div>
					</div>
				</div>
				<div className='relative h-14 w-full rounded-xl border border-dark2 bg-gradient-to-br from-dark to-dark md:h-32 md:w-[250px]'>
					<div className='flex h-full flex-col justify-center px-5'>
						<Image
							src={'/assets/icons/color-picker.svg'}
							width={400}
							height={100}
							alt='color-picker'
						/>
						<Image
							src={'/assets/icons/Opacity.svg'}
							width={400}
							height={100}
							alt='opacity icon'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
