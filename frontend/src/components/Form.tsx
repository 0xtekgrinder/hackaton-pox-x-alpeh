import React from 'react';

import CommitteeTable from './CommitteeTable';
import ProposalTable from './ProposalTable';

export default function Form(): React.ReactNode {
	return (
		<div className={'flex min-h-screen min-w-full items-center justify-center bg-gray-900 p-5'}>
			<div className={'w-full max-w-[1000px] overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl'}>
				<div className={'flex w-full flex-col'}>
					<div className={'w-full px-5 py-10 md:px-10'}>
						<div className={'mb-10 text-center'}>
							<h1 className={'text-3xl font-bold text-gray-900'}>Proposals</h1>
							<p>Display and manage all your proposals below</p>
						</div>
						<ProposalTable />
					</div>

					<div className={'w-full px-5 py-10 md:px-10'}>
						<div className={'mb-10 text-center'}>
							<h1 className={'text-3xl font-bold text-gray-900'}>Committee members</h1>
							<p>Display and manage all committee members below</p>
						</div>
						<CommitteeTable />
					</div>
				</div>
			</div>
		</div>
	);
}
