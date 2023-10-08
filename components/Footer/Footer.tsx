import Account from './Account';
import FooterItem from './FooterItem';
import { footerItems, socialAccounts } from '@/constant';

export default function Footer() {
	return (
		<footer className='h-full w-full bg-linearFooter'>
			<div className='flex h-full min-h-500 flex-wrap items-center justify-between gap-10 p-5 backdrop-blur md:p-10'>
				<div className='max-w-xs'>
					<h2 className='text-2xl font-extrabold'>Flex</h2>
					<p className='py-5 text-sm text-gray'>
						No coding skills needed. Build your dream website hassle-free,
						enjoying a seamless and efficient process that saves time and
						effort.
					</p>
					<div className='flex flex-wrap items-center gap-3'>
						{socialAccounts.map((acc) => (
							<Account key={acc.label} {...acc} />
						))}
					</div>
					<p className='py-5 text-sm text-gray'>Copyright ©2023 Flex</p>
				</div>
				<ul className='flex h-full w-full max-w-xl flex-wrap items-center justify-between gap-10'>
					{footerItems.map((item) => (
						<FooterItem key={item.label} {...item} />
					))}
				</ul>
			</div>
		</footer>
	);
}
