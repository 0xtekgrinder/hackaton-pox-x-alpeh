'use client';

import React from 'react';
import { BiUpvote } from 'react-icons/bi';
import { RiFileAddFill } from 'react-icons/ri';

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
import { CreateProposalForm } from './CreateProposalForm';

interface ProposalTableItem {
	name: string;
	description: string;
	voteBegins: Date;
	voteEnds: Date;
	choices: string[];
}

const proposalTableHeaderItems: string[] = ['Name', 'Description', 'Vote begins', 'Vote ends', 'Actions'];

const proposalTableItems: ProposalTableItem[] = [
	{
		name: 'Proposal 1',
		description: 'A brief description...',
		voteBegins: new Date('2024-02-24 18:41:00'),
		voteEnds: new Date('2024-02-25 18:41:00'),
		choices: ['Yes', 'No', 'Abstract'],
	},
	{
		name: 'Proposal 2',
		description: 'A brief description 2...',
		voteBegins: new Date('2024-02-24 18:41:00'),
		voteEnds: new Date('2024-02-25 18:41:00'),
		choices: [],
	},
];

export function ProposalTab(): React.ReactNode {
	const vote = (choice: string) => {
		console.log(`You have voted for ${choice}`);
	};

	return (
		<Card>
			<CardHeader className={'text-center'}>
				<CardTitle>Proposals</CardTitle>
				<CardDescription>Display all proposals from your committee</CardDescription>
				<div className={'flex justify-end'}>
					<Dialog>
						<DialogTrigger asChild>
							<Button className={'rounded-full'} variant={'ghost'}>
								<RiFileAddFill size={20} />
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader className={'text-center'}>
								<DialogTitle>Create a new proposal</DialogTitle>
								<DialogDescription>
									Create a new proposal by filling in the fields below.
								</DialogDescription>
							</DialogHeader>
							<CreateProposalForm />
							<DialogFooter></DialogFooter>
						</DialogContent>
					</Dialog>
				</div>
			</CardHeader>
			<CardContent className="space-y-2">
				<Table>
					<TableHeader>
						<TableRow>
							{proposalTableHeaderItems.map((proposalTableHeaderItems, index) => {
								return <TableHead key={index}>{proposalTableHeaderItems}</TableHead>;
							})}
						</TableRow>
					</TableHeader>
					<TableBody>
						{proposalTableItems.map((proposalTableItem, index) => {
							return (
								<TableRow key={index}>
									<TableCell className={'font-medium'}>{proposalTableItem.name}</TableCell>
									<TableCell>{proposalTableItem.description}</TableCell>
									<TableCell>{proposalTableItem.voteBegins.toDateString()}</TableCell>
									<TableCell>{proposalTableItem.voteEnds.toDateString()}</TableCell>
									<TableCell className={'flex justify-end'}>
										<Dialog>
											<DialogTrigger asChild>
												<Button variant={'ghost'} className={'rounded-full'}>
													<BiUpvote size={20} />
												</Button>
											</DialogTrigger>
											<DialogContent>
												<DialogHeader className={'text-center'}>
													<DialogTitle>Vote for a proposal</DialogTitle>
													<DialogDescription>
														Vote for a proposal by select one choice below.
													</DialogDescription>
													<div className={'flex flex-col space-y-5'}>
														{proposalTableItem.choices.map((choice, index) => {
															return (
																<Button key={index} onClick={() => vote(choice)}>
																	{choice}
																</Button>
															);
														})}
													</div>
												</DialogHeader>
											</DialogContent>
										</Dialog>
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
