import {
	FeaturedCompany,
	FinancialSnapshot,
	Hero,
	Statistic,
} from '@/components';

export default function Home() {
	return (
		<>
			<Hero />
			<FeaturedCompany />
			<Statistic />
			<FinancialSnapshot />
		</>
	);
}
