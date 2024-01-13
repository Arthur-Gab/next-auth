import { type NextAuthConfig } from 'next-auth';

export const authConfig = {
	pages: {
		signIn: '/auth/sign-in',
	},
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user;
			const isOnRestrictPage = nextUrl.pathname.startsWith('/restrict');

			console.log('Is user logged?', isLoggedIn);
			console.log('User', auth?.user);
			console.log('Expires At', auth?.expires);
			console.log('Is on Restric Page', isOnRestrictPage);

			if (isOnRestrictPage) {
				if (isLoggedIn) return true;

				return false;
			} else if (isLoggedIn) {
				return Response.redirect(new URL('/restrict', nextUrl));
			}
			return true;
		},
	},
	// Place here Github and Google Providers
	providers: [],
	debug: true,
} satisfies NextAuthConfig;
