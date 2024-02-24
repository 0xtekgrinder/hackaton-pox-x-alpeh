import '../styles/globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import React from 'react';

const roboto = Rubik({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: 'Random Elections System',
	description: 'A DAO with random voters elections using VRF.',
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
	return (
		<html lang={'en'}>
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
