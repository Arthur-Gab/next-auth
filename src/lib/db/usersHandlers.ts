import db from './';

export const createUser = async (email: string, password?: string) => {
	/**
	 * Try to create a user
	 * Otherwise return a error message
	 */
	try {
		await db.user.create({
			data: {
				email,
				...(password ? { password } : {}),
			},
		});

		// TODO: Send Verification Token
	} catch (e) {
		console.log(e);

		// @ts-expect-error
		if (e.code === 'P2002')
			// PrismaClientKnownRequestError was throwing an Erro when wokirng with Auth.JS
			return { message: 'Este email já está em uso.' };
		return { message: 'Algo deu errado. Tente outra vez.' };
	}
};

export const getUserByEmail = async (email: string) => {
	console.log('Tentando buscar um usuario');

	const user = await db.user.findUnique({
		where: {
			email,
		},
	});

	console.log(user);

	if (!user) {
		return null;
	}

	return user;
};
