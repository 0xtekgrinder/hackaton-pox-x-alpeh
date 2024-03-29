'use client';

import React, { useEffect, useState } from 'react';
import { BiTrash, BiUpvote } from 'react-icons/bi';
import { RiFileAddFill } from 'react-icons/ri';
import * as sdk from '../../../sdk';


import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '../../ui';
import { AddMemberForm } from './AddMemberForm';
import { CreateProposalForm } from './CreateProposalForm';
import { proposalManager } from 'src/constants';

const memberTableHeaderItems: string[] = ['Address', 'Actions'];

export function CommitteeTab(): React.ReactNode {
	const deleteMember = (address: string) => {
		console.log(`Delete ${address}`);
	};

	const [memberTableItems, setMemberTableItems] = useState<string[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			console.log('Fetching proposals');
			const comitee = await sdk.getComitee(proposalManager);
			setMemberTableItems(comitee);
		};

		// call the function
		fetchData()
			// make sure to catch any error
			.catch(console.error);
	}, []);

	return (
		<Card>
			<CardHeader className={'text-center'}>
				<CardTitle>Committee</CardTitle>
				<CardDescription>Display all members from your committee</CardDescription>
				<div className={'flex justify-end'}>
					<Dialog>
						<DialogTrigger asChild>
							<Button className={'rounded-full'} variant={'ghost'}>
								<RiFileAddFill size={20} />
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader className={'text-center'}>
								<DialogTitle>Add a new member</DialogTitle>
								<DialogDescription>Add a new member by filling in the field below.</DialogDescription>
							</DialogHeader>
							<AddMemberForm />
							<DialogFooter></DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</CardHeader>
			<CardContent className="space-y-2">
				<Table>
					<TableHeader>
						<TableRow>
							{memberTableHeaderItems.map((memberTableHeaderItem, index) => {
								return <TableHead key={index}>{memberTableHeaderItem}</TableHead>;
							})}
						</TableRow>
					</TableHeader>
					<TableBody>
						{memberTableItems.map((memberTableItem, index) => {
							return (
								<TableRow key={index}>
									<TableCell className={'font-medium'}>{memberTableItem}</TableCell>
									<TableCell className={'flex justify-end'}>
										<Button
											onClick={() => deleteMember(memberTableItem)}
											variant={'ghost'}
											className={'rounded-full'}
										>
											<BiTrash size={20} />
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
					<TableFooter></TableFooter>
				</Table>
			</CardContent>
			<CardFooter></CardFooter>
		</Card>
	);
}
