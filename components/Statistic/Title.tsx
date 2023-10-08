import Tab from './Tab';

export default function StatisticTitle() {
	return (
		<div className='mx-auto max-w-6xl'>
			<p className='text-center text-15 text-primaryBlue'>Flex Impact</p>
			<h2 className='mx-auto max-w-4xl bg-gradient-to-r from-lightWhite to-lightBlue bg-clip-text pt-[14px] text-center text-2xl font-bold text-transparent md:text-5xl lg:text-46'>
				Empowering businesses with data-driven success
			</h2>
			<p className='mx-auto max-w-2xl py-5 text-center text-sm text-gray md:text-base'>
				Join the Flex revolution and experience the power of cutting-edge
				technology driving businesses to new heights. Embrace the future of
				software solutions today!
			</p>
			<Tab />
		</div>
	);
}
