import Link from 'next/link';

type FooterItemProps = {
	label: string;
	items: string[];
};

export default function FooterItem({ label, items }: FooterItemProps) {
	return (
		<li>
			<h3 className='text-base font-semibold text-white'>{label}</h3>
			{items.map((link) => (
				<Link
					className='block py-5 text-15 font-normal text-gray'
					href={'/'}
					key={link}
				>
					{link}
				</Link>
			))}
		</li>
	);
}
