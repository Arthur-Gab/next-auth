import { type NextAuthConfig } from 'next-auth';

import Credentials from 'next-auth/providers/credentials';

import { SignInFormSchema } from '@/lib/types/auth';
import { getUserByEmail } from '@/lib/db';

export default {
	providers: [
		Credentials({
			/**
			 * Authorize nao possuem nenhum metodo de validar, por isso
			 * e necessario roteger a routa de Auth da API de usuarios que chamarem * a API manualmente
			 */
			authorize: async (credentials) => {
				const isCredentialsValid =
					SignInFormSchema.safeParse(credentials);

				// Credentials validas
				if (isCredentialsValid.success) {
					const { email, password } = isCredentialsValid.data;

					const user = await getUserByEmail(email);

					// Usuarios criados pelo Google e Github nao possuem senha no BD
					if (!user || !user.password) {
						return null;
					}

					// No mundo real estaria usando bcrypt.compare
					const passwordMatch = password === user.password;

					if (passwordMatch) {
						return user;
					}
				}

				return null;
			},
		}),
	],
} satisfies NextAuthConfig;
