// AUTH todo
import { NextRequest } from 'next/server';

export default function Middleware(req: NextRequest) {
	console.log(req.nextUrl);
}

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
