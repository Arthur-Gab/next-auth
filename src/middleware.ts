import authConfig from './auth.config';
import NextAuth from 'next-auth';

const PUBLIC_ROUTES = ['/', '/auth/sign-up', '/auth/sign-in'];
const PRIVATE_ROUTES = ['/settings'];

const { auth } = NextAuth(authConfig);

export default auth((req) => {
	const isLoggedIn = !!req.auth;
	const nextUrl = req.nextUrl;

	const isInPrivateRoute = PRIVATE_ROUTES.includes(nextUrl.pathname);
	const isInPublicRoute = PUBLIC_ROUTES.includes(nextUrl.pathname);

	console.log('Proxima Rota:', req.nextUrl.pathname);
	console.log('Em rota privada:', isInPrivateRoute);
	console.log('Em rota publica:', isInPublicRoute);
	console.log('Usuario logado: ', isLoggedIn);

	if (isInPrivateRoute && !isLoggedIn) {
		console.info(
			'Usuario tentando acessar rota privada sem estar logado, redirecionando para Sign-in page'
		);
		return Response.redirect(new URL('/auth/sign-in', nextUrl));
	}

	if (isInPublicRoute) {
		console.info('Usuario em rota publica');
		if (isLoggedIn) {
			console.info('Usuario ja esta logado, redirecionando..');
			return Response.redirect(new URL('/settings', nextUrl));
		}
		return null;
	}
});

// See "Matching Paths" below to learn more
// export const config = {
// 	matcher: ['/restrict/:path*', '/auth/sign-in/'],
// };
export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
