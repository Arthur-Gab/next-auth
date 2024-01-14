'use client';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { handleSignIn } from '@/lib/actions/auth';
import { SignInFormSchema } from '@/lib/types/auth';

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { XCircle } from 'lucide-react';

import { useCallback, useTransition, useState } from 'react';

const SignInForm = () => {
	const [formSubmitted, setFormSubmitted] = useTransition();
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const form = useForm<z.infer<typeof SignInFormSchema>>({
		resolver: zodResolver(SignInFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = useCallback(
		(formData: z.infer<typeof SignInFormSchema>) => {
			setErrorMessage(null);

			setFormSubmitted(async () => {
				const error = await handleSignIn(formData);

				if (error) setErrorMessage(error.message);
			});
		},
		[]
	);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='space-y-6'
			>
				<div className='space-y-4'>
					<FormField
						control={form.control}
						name='email'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='password'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Senha</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{errorMessage && (
						<p className='inline-flex h-10 w-full items-center justify-center gap-4 whitespace-nowrap rounded-md   bg-destructive/20 px-4 py-2 text-sm font-medium text-destructive ring-offset-background'>
							<XCircle /> {errorMessage}
						</p>
					)}
				</div>
				<div>
					<Button
						className='w-full'
						type='submit'
						disabled={formSubmitted}
					>
						{formSubmitted ? 'Entrando...' : 'Entrar'}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default SignInForm;
