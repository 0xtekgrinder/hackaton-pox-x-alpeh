'use client';

import React from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui';
import { CommitteeTab } from './CommitteeTab';
import { ProposalTab } from './ProposalTab';

export function TabSelector(): React.ReactNode {
	return (
		<section className={'flex h-screen items-center justify-center bg-primary-foreground p-5'}>
			<Tabs defaultValue={'proposals'} className={'w-2/3'}>
				<TabsList className={'grid w-full grid-cols-2'}>
					<TabsTrigger value={'proposals'}>Proposals</TabsTrigger>
					<TabsTrigger value={'committees'}>Committee members</TabsTrigger>
				</TabsList>
				<TabsContent value={'proposals'}>
					<ProposalTab />
				</TabsContent>
				<TabsContent value={'committees'}>
					<CommitteeTab />
				</TabsContent>
			</Tabs>
		</section>
	);
}
