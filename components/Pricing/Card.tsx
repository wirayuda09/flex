import ListItem from './ListItem';

type CardProps = {
	title: string;
	subTitle: string;
	plan: string[];
	lists: {
		title: string;
		include: boolean;
	}[];
	btnText: string;
	tag?: string;
};
export default function Card({
	btnText,
	lists,
	plan,
	subTitle,
	title,
	tag,
}: CardProps) {
	return (
		<div
			className={`relative w-full max-w-350 rounded-xl border border-lineGray p-5 ${
				title === 'ENTERPRICE' ? 'bg-gradient-to-b from-lineGray' : ''
			}`}
		>
			{tag && (
				<div className='absolute -top-3 left-6 w-20 rounded-full border border-primaryBlue bg-dark py-1 text-center text-xs font-semibold'>
					{tag}
				</div>
			)}
			<h3 className='pt-4 text-lg font-medium uppercase leading-relaxed'>
				{title}
			</h3>
			<p className='py-3 text-sm font-normal'>{subTitle}</p>
			<h4 className='border-b border-dashed border-lineGray bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pb-4 text-4xl font-semibold text-transparent'>
				{plan[0]}
				<span className='text-sm font-light text-lineGray'>{plan[1]}</span>
			</h4>
			<ul className='mt-9 flex flex-col gap-4'>
				{lists.map((list) => (
					<ListItem key={list.title} {...list} />
				))}
			</ul>
			<button
				className={`mt-9 w-full rounded-lg  py-3 text-white ${
					title === 'Basic'
						? 'bg-lineGray'
						: 'bg-gradient-to-r from-lightBlue2 to-primaryBlue2'
				}`}
			>
				{btnText}
			</button>
		</div>
	);
}
