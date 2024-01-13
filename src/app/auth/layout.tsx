import { cn } from '@/lib/utils';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<main className={cn(' flex h-screen items-center justify-center')}>
				{children}
			</main>
		</>
	);
};

export default AuthLayout;
