import { TypographyH1 } from '@/components/ui/typograph';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LogOutButton from '@/components/LogOutButton';

const RestricPage = () => {
	return (
		<>
			<main className='container flex h-full flex-col items-center justify-center gap-16'>
				<Button
					className='gap-4 self-end'
					asChild
				>
					<Link href='/'>Voltar para Home</Link>
				</Button>

				<div className='flex w-full flex-col gap-6'>
					<TypographyH1 className='text-center'>
						Hello <span className='text-blue-500'>{'{user}'}</span>{' '}
						from Protected Page
					</TypographyH1>
					<LogOutButton />
				</div>
			</main>
		</>
	);
};

export default RestricPage;
