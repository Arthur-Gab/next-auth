'use client';

import { Button } from './ui/button';
import { LogOut } from 'lucide-react';
import { handleSignOut } from '@/lib/actions/auth';

const LogOutButton = () => {
	return (
		<Button
			className='gap-4 self-center'
			onClick={() => handleSignOut()}
		>
			<LogOut /> Sair
		</Button>
	);
};

export default LogOutButton;
