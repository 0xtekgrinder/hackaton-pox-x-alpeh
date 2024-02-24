import React from 'react';

export function Footer(): React.ReactNode {
	return (
		<footer className={'border-t-2 border-solid border-border bg-primary-foreground'}>
			<div className={'mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8'}>
				<p className={'text-sm font-light text-muted-foreground'}>
					© 2024 Your Company, Inc. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
