'use server';

import z from 'zod';
import { SignInFormSchema, SignUpFormSchema } from '@/lib/types/auth';
import { createUser } from '@/lib/db';
import { AuthError } from 'next-auth';

import { signIn, signOut } from '@/auth';

/**
 *
 * @param {Object} formData - The user sign-up form data.
 * @property {string} formData.email - The email address provided in the form
 * @property {string} formData.passowrd - The passowrd provided in the form
 * @returns {Promise<{ message: string } | undefined>} - A promise that resolves to an object with a message property (error message) or user Authentication if successful.
 */
export const handleSignIn = async (
	formData: z.infer<typeof SignInFormSchema>
) => {
	console.log('Starting Login');
	console.log(formData);

	const { email, password } = formData;

	try {
		await signIn('credentials', {
			email,
			password,
			redirectTo: '/settings',
		});
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

		throw e; // Necessario lancar o erro para o redirecionamento funcionar
	}
};

/**
 *
 * @param {Object} formData - The user sign-up form data.
 * @property {string} formData.email - The email address provided in the form
 * @property {string} formData.passowrd - The passowrd provided in the form
 * @returns {Promise<{ message: string } | undefined>} - A promise that resolves to an object with a message property (error message) or undefined if successful.
 */
export const handleSignUp = async (
	formData: z.infer<typeof SignUpFormSchema>
) => {
	const { email, password } = formData;
	console.log('Starting Create User');

	return await createUser(email, password);
};

export const handleSignOut = async () => {
	console.log('Sing Out');

	try {
		await signOut({
			redirectTo: '/',
		});
	} catch (e) {
		console.error(e);

		if (e instanceof AuthError) {
			console.log(e.type);
		}

		throw e; // Necessario lancar o erro para o redirecionamento funcionar
	}
};
