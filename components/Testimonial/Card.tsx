import Image from 'next/image';

type CardProps = {
	author: string;
	role: string;
	text: string;
	profile: string;
};

export default function Card({ author, role, text, profile }: CardProps) {
	return (
		<div className='w-full min-w-423 snap-start border-l border-lineGray p-3 md:px-10'>
			<div className='flex h-full w-full snap-start flex-col bg-[url("/assets/icons/quotes.svg")] bg-left-top bg-no-repeat'>
				<div className='flex items-center gap-2'>
					{[1, 2, 3, 4, 5].map((star) => (
						<Image
							key={star}
							src={'/assets/icons/star.svg'}
							width={20}
							height={20}
							alt='star icon'
						/>
					))}
				</div>
				<p className='mt-auto bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text py-5 text-sm text-transparent md:text-2xl'>
					&quot;{text}&quot;
				</p>
				<div className='inline-flex items-center gap-5'>
					<Image
						className='rounded-full object-contain'
						src={profile}
						width={50}
						height={50}
						alt='profile image'
					/>
					<div>
						<h3 className='text-base font-semibold'>{author}</h3>
						<p className='truncate text-xs font-normal text-gray'>{role}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
