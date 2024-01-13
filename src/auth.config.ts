import { type NextAuthConfig } from 'next-auth';

export const authConfig = {
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
			}
			if (isLoggedIn) {
				return Response.redirect(new URL('/restrict', nextUrl));
			}

			return false;
		},
	},
	// Place here Github and Google Providers
	providers: [],
	debug: true,
} satisfies NextAuthConfig;
