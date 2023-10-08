import Image from 'next/image';

import { avatars } from '@/constant';

export default function Users() {
	return (
		<div className='mt-7 flex items-center gap-5'>
			<div className=' flex items-center'>
				{avatars.map((avatar) => (
					<Image
						className='-ml-3 h-auto w-14 rounded-full border-2 border-dark object-contain object-center '
						key={avatar}
						src={avatar}
						width={30}
						height={30}
						alt='profile'
					/>
				))}
			</div>
			<p className=' block text-base font-normal text-lightGray'>+4.7K Users</p>
		</div>
	);
}
