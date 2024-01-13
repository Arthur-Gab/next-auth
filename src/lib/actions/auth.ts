'use server';

import z from 'zod';
import { SignInFormSchema } from '@/components/SignInForm';
import { SignUpFormSchema } from '@/components/SignUpForm';
import { createUser } from '@/lib/db';

export const handleSignIn = async (
	formData: z.infer<typeof SignInFormSchema>
) => {
	await new Promise((resolve) => {
		setTimeout(resolve, 1500);
	});

	console.log(formData);
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
