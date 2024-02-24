'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import React from 'react';

import { Button } from '../ui';

export function Header(): React.ReactNode {
	return (
		<header className={'fixed w-full border-b-2 border-solid border-border bg-primary-foreground'}>
			<div className={'mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'}>
				<div className={'flex lg:flex-1'}>
					<a href={'/'} className={'-m-1.5 p-1.5'}>
						<img
							className={'h-12 w-auto'}
							src={'https://cdn.iconscout.com/icon/free/png-256/free-3d-cube-1459705-1232307.png'}
							alt={'Logo'}
						/>
					</a>
				</div>
				<div className={'flex'}>
					<ConnectButton />
				</div>
			</div>
		</header>
	);
}
