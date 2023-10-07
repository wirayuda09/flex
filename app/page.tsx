import {
	CustomizableAssets,
	FeaturedCompany,
	Features,
	FinancialSnapshot,
	Hero,
	NumbersData,
	Statistic,
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
		</>
	);
}
