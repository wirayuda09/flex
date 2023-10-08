import Image from 'next/image';

type AccountProps = {
	label: string;
	icon: string;
};
export default function Account({ label, icon }: AccountProps) {
	return (
		<a
			href='/'
			target='_blank'
			key={label}
			className=' flex h-10 w-10 items-center justify-center rounded-xl bg-lineGray'
		>
			<Image src={icon} width={24} height={24} alt={label} />
		</a>
	);
}
