import {
	Hero,
	Pricing,
	Features,
	Statistic,
	NumbersData,
	Testimonial,
	FeaturedCompany,
	FinancialSnapshot,
	CustomizableAssets,
	Integration,
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
			<Pricing />
			<Integration />
		</>
	);
}
