'use client';

import React from 'react';

import { Button, Input, Label } from '../../ui';

interface ProposalFormData {
	name: string;
	description: string;
	voteBegins: Date;
	voteEnds: Date;
	choices: string[];
}

export function CreateProposalForm(): React.ReactNode {
	const createProposal = (e: any) => {
		e.preventDefault();

		const proposalData: ProposalFormData = {
			name: e.target.name.value,
			description: e.target.description.value,
			voteBegins: new Date(e.target.voteBegins.value),
			voteEnds: new Date(e.target.voteEnds.value),
			choices: e.target.choices.value.split(','),
		};

		e.target.reset();

		console.log(proposalData);
	};

	return (
		<form onSubmit={createProposal}>
			<div className={'flex flex-col space-y-5'}>
				<div className={'flex flex-col space-y-2'}>
					<Label>Name</Label>
					<Input type={'text'} id={'name'} placeholder={'Name'} />
				</div>
				<div className={'flex flex-col space-y-2'}>
					<Label>Description</Label>
					<Input type={'text'} id={'description'} placeholder={'Description'} />
				</div>
				<div className={'flex flex-col space-y-2'}>
					<Label>Vote begins</Label>
					<Input type={'datetime-local'} id={'voteBegins'} />
				</div>
				<div className={'flex flex-col space-y-2'}>
					<Label>Vote ends</Label>
					<Input type={'datetime-local'} id={'voteEnds'} />
				</div>
				<div className={'flex flex-col space-y-2'}>
					<Label>Choices (list of items separated by commas)</Label>
					<Input type={'text'} id={'choices'} placeholder={'Choices'} />
				</div>
				<Button type={'submit'} variant={'default'}>
					Create
				</Button>
			</div>
		</form>
	);
}
