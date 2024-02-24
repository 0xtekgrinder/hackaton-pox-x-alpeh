import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import React from 'react';

import { ThemeProvider, Web3Provider } from '../components';

const roboto = Rubik({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

export const metadata: Metadata = {
	title: 'DApp Voter',
	description: 'A DAO with random voter elections using VRF.',
};

export default function RootLayout({ children }: RootLayoutProps): React.ReactNode {
	return (
		<html lang={'en'} suppressHydrationWarning>
			<body className={roboto.className}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
					<Web3Provider>{children}</Web3Provider>
				</ThemeProvider>
			</body>
		</html>
	);
}
