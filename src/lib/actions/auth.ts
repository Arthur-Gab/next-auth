'use server';

import z from 'zod';
import { SignInFormSchema } from '@/components/SignInForm';
import { SignUpFormSchema } from '@/components/SignUpForm';
import { createUser } from '@/lib/db';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export const handleSignIn = async (
	formData: z.infer<typeof SignInFormSchema>
) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 1500);
	});

	try {
		await signIn('credentials', formData);
	} catch (e) {
		console.error(e);

		if (e instanceof AuthError) {
			switch (e.type) {
				case 'CredentialsSignin':
					return { message: 'E-mail e/ou senha inválidos.' };

				default:
					return { message: 'Algo deu errado. Tente outra vez.' };
			}
		}
	}
};

export const handleSignUp = async (
	formData: z.infer<typeof SignUpFormSchema>
) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 500);
	});

	const { email, password } = formData;

	// Can be undefined or {message : 'Error message'}
	return await createUser(email, password);
};
