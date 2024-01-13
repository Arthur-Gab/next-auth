import { PrismaClient } from '@prisma/client';

const dbClientSingleton = () => {
	return new PrismaClient();
};

declare global {
	var db: undefined | ReturnType<typeof dbClientSingleton>;
}

const db = globalThis.db ?? dbClientSingleton();
export default db;

if (process.env.NODE_ENV !== 'production') globalThis.db = db;

export * from './usersHandlers';
