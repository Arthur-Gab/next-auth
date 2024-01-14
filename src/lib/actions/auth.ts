'use server';

import z from 'zod';
import { SignInFormSchema } from '@/components/SignInForm';
import { SignUpFormSchema } from '@/components/SignUpForm';
import { createUser } from '@/lib/db';
import { AuthError } from 'next-auth';

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
	try {
		console.log(formData);
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

	return await createUser(email, password);
};

export const handleSignOut = async () => {
	console.log('Sing Out');
};
