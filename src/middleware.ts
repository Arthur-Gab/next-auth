import { type NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	console.log(request);
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ['/restrict', '/auth/sign-in/'],
};
