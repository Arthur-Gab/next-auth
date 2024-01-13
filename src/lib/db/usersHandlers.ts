import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
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
	} catch (e) {
		console.log(e);
		if (e instanceof PrismaClientKnownRequestError && e.code === 'P2002')
			return { message: 'Este email já está em uso.' };

		return { message: 'Algo deu errado. Tente outra vez.' };
	}
};
