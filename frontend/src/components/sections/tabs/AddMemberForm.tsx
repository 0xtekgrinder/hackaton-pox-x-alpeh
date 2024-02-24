'use client';

import React from 'react';

import { Button, Input, Label } from '../../ui';

interface MemberFormData {
	address: string;
}

export function AddMemberForm(): React.ReactNode {
	const addMember = (e: any) => {
		e.preventDefault();

		const memberData: MemberFormData = {
			address: e.target.address.value,
		};

		e.target.reset();

		console.log(memberData);
	};

	return (
		<form onSubmit={addMember}>
			<div className={'flex flex-col space-y-5'}>
				<div className={'flex flex-col space-y-2'}>
					<Label>Address</Label>
					<Input type={'text'} id={'address'} placeholder={'Address'} />
				</div>
				<Button type={'submit'} variant={'default'}>
					Add
				</Button>
			</div>
		</form>
	);
}
