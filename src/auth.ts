// import NextAuth from 'next-auth';
// import Credentials from 'next-auth/providers/credentials';
// import { authConfig } from './auth.config';

// import z from 'zod';
// import { getUser } from './lib/db';
// const SignInFormSchema = z.object({
// 	email: z
// 		.string()
// 		.min(1, { message: 'Email é obrigatório.' })
// 		.email({ message: 'Email inválido' }),
// 	password: z.string().min(1, { message: 'Senha é obrigatória.' }),
// });

// interface SignInWithCredentials extends z.infer<typeof SignInFormSchema> {
// 	callbackUrl: string;
// }

// export const { auth, signIn, signOut } = NextAuth({
// 	...authConfig,
// 	providers: [
// 		Credentials({
// 			//@ts-expect-error
// 			async authorize(credentials: SignInWithCredentials, req) {
// 				console.log('Credentiasl', credentials);

// 				const { email, password } = credentials;

// 				const user = await getUser(email);
// 				if (user instanceof Error) return user.message;

// 				const passwordMatch = password === user?.password;
// 				console.log(passwordMatch);

// 				if (passwordMatch) return user;

// 				return null;
// 			},

// 			async authorize(credentials, req) {
// 				console.log('Credentiasl', credentials);

// 				const verifiedFields = SignInFormSchema.safeParse(credentials);

// 				if (verifiedFields.success) {
// 					const { email, password } = verifiedFields.data;

// 					const user = await getUser(email);
// 					if (user instanceof Error) return user.message;

// 					const passwordMatch = password === user?.password;
// 					console.log(passwordMatch);

// 					if (passwordMatch) {
// 						console.log(req);

// 						return user;
// 					}
// 				}

// 				return null;
// 			},
// 		}),
// 	],
// });
