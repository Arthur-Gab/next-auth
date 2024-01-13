'use client';

import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { handleSignUp } from '@/lib/actions/auth';

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

import { useCallback, useTransition } from 'react';

export const SignUpFormSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email é obrigatório.' })
		.email({ message: 'Email inválido' }),
	password: z.string().min(1, { message: 'Senha é obrigatória.' }),
});

const SignUpForm = () => {
	const [formSubmitted, setFormSubmitted] = useTransition();

	const form = useForm<z.infer<typeof SignUpFormSchema>>({
		resolver: zodResolver(SignUpFormSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit = useCallback(
		(formData: z.infer<typeof SignUpFormSchema>) => {
			setFormSubmitted(() => {
				handleSignUp(formData);
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
				</div>
				<div>
					<Button
						className='w-full'
						type='submit'
						disabled={formSubmitted}
					>
						{formSubmitted ? 'Criando...' : 'Criar'}
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default SignUpForm;
