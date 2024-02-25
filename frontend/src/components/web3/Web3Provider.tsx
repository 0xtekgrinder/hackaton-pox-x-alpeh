'use client';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon } from 'wagmi/chains';

interface RainbowProviderProps {
	children: React.ReactNode;
}

const config = getDefaultConfig({
	appName: 'My RainbowKit App',
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string,
	chains: [mainnet, polygon],
	ssr: true,
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: RainbowProviderProps): React.ReactNode {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>{children}</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
