import Image from 'next/image';

type CardProps = {
	title: string;
	thumbnail: string;
	categories: string[];
	createdAt: string;
	minutes: string;
};

export default function Card({
	categories,
	createdAt,
	minutes,
	thumbnail,
	title,
}: CardProps) {
	return (
		<div className=' w-full max-w-md rounded-2xl border border-lineGray p-3 md:p-6'>
			<Image
				className='rounded-2xl object-cover'
				src={thumbnail}
				alt={title}
				width={400}
				height={400}
			/>
			<div className='flex items-center gap-x-4 py-5'>
				{categories.map((category) => (
					<div
						className='w-min rounded-full bg-lineGray px-5 py-1 text-xs text-gray'
						key={category}
					>
						{category}
					</div>
				))}
			</div>
			<h3 className='bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text py-5  text-left text-xl font-medium text-transparent md:text-3xl'>
				{title}
			</h3>
			<p className='text-sm font-normal text-gray'>
				<span>{createdAt} </span> &#8226;
				<span>{minutes}</span>
			</p>
		</div>
	);
}
