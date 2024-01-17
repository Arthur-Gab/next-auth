import { auth } from './auth';

export default auth((req) => {
	// req.auth
	console.log(req.nextUrl.pathname);
});

// See "Matching Paths" below to learn more
// export const config = {
// 	matcher: ['/restrict/:path*', '/auth/sign-in/'],
// };

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
