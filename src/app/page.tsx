import { TypographyH1, TypographyLead } from '@/components/ui/typograph';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<>
			<main className='container flex h-full flex-col items-center justify-center gap-8'>
				<div>
					<TypographyH1 className='text-center'>
						<span className='text-blue-500'>Authentication</span>{' '}
						for NextJs 14, 0Auth and Prisma
					</TypographyH1>
					<TypographyLead className='text-center'>
						See more on{' '}
						<Link
							href='https://authjs.dev/'
							className='inline-flex items-center gap-2 underline decoration-dashed'
						>
							Auth.js <ExternalLink size={16} />
						</Link>
					</TypographyLead>
				</div>
				<div className='flex w-full gap-4'>
					<Button
						asChild
						className='w-full'
					>
						<Link href='/auth/sign-up'>Criar conta</Link>
					</Button>
					<Button
						asChild
						className='w-full'
					>
						<Link href='/auth/sign-in'>Logar</Link>
					</Button>
				</div>
				<Button
					className='gap-4'
					asChild
				>
					<Link href='/restrict'>
						Pagina Protegida <ExternalLink />
					</Link>
				</Button>
			</main>
		</>
	);
}
