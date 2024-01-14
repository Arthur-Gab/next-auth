import z from 'zod';

export const SignInFormSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email é obrigatório.' })
		.email({ message: 'Email inválido' }),
	password: z.string().min(1, { message: 'Senha é obrigatória.' }),
});

// On real World SingUp will get a Regex, but for development i will use that schema
export const SignUpFormSchema = z.object({
	email: z
		.string()
		.min(1, { message: 'Email é obrigatório.' })
		.email({ message: 'Email inválido' }),
	password: z.string().min(1, { message: 'Senha é obrigatória.' }),
});
