import Image from 'next/image';
import NavbarWrapper from './NavbarWrapper';

export default function Navbar() {
	return (
		<nav className='w-full'>
			<div className='flex h-28 items-center justify-between px-5 py-12 md:px-10'>
				<div className='flex items-center gap-2'>
					<Image
						src={'/assets/icons/logo.svg'}
						width={24}
						height={24}
						alt='flex logo'
					/>
					<h1 className='text-lg font-semibold md:text-28'>Flex</h1>
				</div>
				<NavbarWrapper />
			</div>
		</nav>
	);
}
