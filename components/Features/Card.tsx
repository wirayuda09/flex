import Image from 'next/image';

type FeatureCardProps = {
	title: string;
	icon: string;
	text: string;
};

export default function FeatureCard({ icon, text, title }: FeatureCardProps) {
	return (
		<div className='w-full max-w-350'>
			<Image
				className=' mb-auto object-contain'
				src={icon}
				width={100}
				height={100}
				alt={title}
			/>
			<h3 className=' pt-5 text-left text-2xl font-semibold'>{title}</h3>
			<p className=' pt-3 text-left text-lg font-normal text-gray'>{text}</p>
		</div>
	);
}
