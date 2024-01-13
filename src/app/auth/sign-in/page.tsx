import { FcGoogle as Google } from 'react-icons/fc';
import { SiGithub as Github } from 'react-icons/si';
import { ExternalLink } from 'lucide-react';

import {
	Card,
	CardHeader,
	CardDescription,
	CardContent,
	CardFooter,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import SignInForm from '@/components/SignInForm';

const SignInPage = () => {
	return (
		<>
			<div className='w-full max-w-sm'>
				<Card>
					<CardHeader>
						<div className='mb-4 text-right'>
							<Button asChild>
								<Link href='/'>Cancelar</Link>
							</Button>
						</div>
						<CardTitle className='text-center'>
							Entrar na conta
						</CardTitle>
						<CardDescription>
							Insira seu email e senha para entrar na sua conta
						</CardDescription>
					</CardHeader>

					{/* Sign-In form */}
					<CardContent>
						<SignInForm />
					</CardContent>

					{/* OU */}
					<CardContent className='pb-8 pt-3'>
						<Separator className='relative'>
							<span
								aria-hidden='true'
								className='absolute top-2/4 block h-[1px] w-full -translate-y-2/4 bg-muted-foreground'
							></span>
							<span className='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 bg-background px-2 text-foreground'>
								OU
							</span>
						</Separator>
					</CardContent>

					<CardFooter className='flex flex-col gap-4'>
						{/* <div className='flex w-full gap-4'> */}
						<Button
							className='w-full gap-4'
							variant='secondary'
						>
							<Google size={24} />
							Entar com Google
						</Button>
						<Button className='w-full gap-4'>
							<Github size={24} />
							Entar com Github
						</Button>
						{/* </div> */}

						<Button
							asChild
							variant='link'
						>
							<Link
								href='/auth/sign-up'
								className='w-full gap-2'
							>
								Criar uma conta <ExternalLink size={16} />
							</Link>
						</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
};

export default SignInPage;
