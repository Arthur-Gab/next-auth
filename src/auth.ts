import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

import z from 'zod';
const SignInFormSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email é obrigatório.' })
		.email({ message: 'Email inválido' }),
	password: z.string().min(1, { message: 'Senha é obrigatória.' }),
});

export const { auth, signIn, signOut } = NextAuth({
	...authConfig,
	providers: [
		Credentials({
			async authorize(credentials) {
				console.log('Credentiasl', credentials);

				const validateCredentials =
					SignInFormSchema.safeParse(credentials);

				console.log(validateCredentials);

				if (validateCredentials.success) {
				}

				console.log('Invalid Credentials');
				return null;
			},
		}),
	],
});
