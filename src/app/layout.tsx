import type { Metadata } from 'next';
import { inter } from '@/components/ui/fonts';

import '@/styles/globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Authentication',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt'>
			<body className={cn(inter.variable, 'h-screen font-sans')}>
				{children}
			</body>
		</html>
	);
}
