import Image from 'next/image';

type ListItemProps = {
	title: string;
	include: boolean;
};
export default function ListItem({ title, include }: ListItemProps) {
	return (
		<li
			className='flex items-center gap-x-5 text-15 font-medium text-white'
			key={title}
		>
			<Image
				src={`/assets/icons/${include ? 'check-white.svg' : 'close.svg'}`}
				width={20}
				height={20}
				alt='check'
			/>
			{title}
		</li>
	);
}
