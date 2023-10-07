import {
	CustomizableAssets,
	FeaturedCompany,
	Features,
	FinancialSnapshot,
	Hero,
	NumbersData,
	Statistic,
	Testimonial,
} from '@/components';

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedCompany />
			<Statistic />
			<FinancialSnapshot />
			<CustomizableAssets />
			<Features />
			<NumbersData />
			<Testimonial />
		</>
	);
}
