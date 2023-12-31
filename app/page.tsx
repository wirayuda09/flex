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
	Articles,
	FAQ,
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
			<Articles />
			<FAQ />
		</>
	);
}
