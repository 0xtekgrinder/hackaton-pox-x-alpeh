import { ethereum } from 'aleph-sdk-ts/dist/accounts';
import { DEFAULT_API_V2 } from 'aleph-sdk-ts/dist/global';
import { aggregate, program, store } from 'aleph-sdk-ts/dist/messages';

export type Proposal = {
	title: string;
	description: string;
	startTimestamp: number;
	endTimestamp: number;
	choices: string[];
};

export type AggregateType = {
	proposals: string[];
	comitee: string[];
};

export async function createProposal(proposal: Proposal, account: ethereum.ETHAccount): Promise<void> {
	console.log('Creating proposal');
	const fileHashPublishStore = await store.Publish({
		channel: 'AmazingVote',
		account,
		fileObject: Buffer.from(JSON.stringify(proposal)),
		APIServer: DEFAULT_API_V2,
	});

	let aggr: AggregateType;
	try {
		aggr = await aggregate.Get<AggregateType>({
			address: account.address,
			key: 'AmazingVote',
			APIServer: DEFAULT_API_V2,
		});
	} catch (e) {
		aggr = {
			proposals: [],
			comitee: [],
		};
	}

	aggr.proposals.push(fileHashPublishStore.item_hash);

	await aggregate.Publish<AggregateType>({
		channel: 'AmazingVote',
		account,
		key: 'AmazingVote',
		APIServer: DEFAULT_API_V2,
		content: aggr,
	});

	console.log('Proposal created');
}

// The address can be set by default to the owner of DAO
export async function getProposals(address: string): Promise<Proposal[]> {
	try {
		const aggr = await aggregate.Get<AggregateType>({
			address,
			key: 'AmazingVote',
			APIServer: DEFAULT_API_V2,
		});

		const proposals: Proposal[] = [];
		for (const proposalHash of aggr.proposals) {
			const proposal = await store.Get({
				fileHash: proposalHash,
				APIServer: DEFAULT_API_V2,
			});
	
			proposals.push(JSON.parse(proposal.toString()));
		}
	
		return proposals;
	} catch (e) {
		return [];
	}
}


export async function getComitee(account: string): Promise<string[]> {
	const aggr = await aggregate.Get<AggregateType>({
		address: account,
		key: 'AmazingVote',
		APIServer: DEFAULT_API_V2,
	});

	return aggr.comitee;
}

export async function addComiteeMember(account: ethereum.ETHAccount, address: string): Promise<void> {
	let aggr: AggregateType;
	try {
		aggr = await aggregate.Get<AggregateType>({
			address: account.address,
			key: 'AmazingVote',
			APIServer: DEFAULT_API_V2,
		});
	} catch (e) {
		aggr = {
			proposals: [],
			comitee: [],
		};
	}

	aggr.comitee.push(address);

	await aggregate.Publish<AggregateType>({
		channel: 'AmazingVote',
		account,
		key: 'AmazingVote',
		APIServer: DEFAULT_API_V2,
		content: aggr,
	});
}

/*
export async function pickVoters(account: ethereum.ETHAccount, proposalHash: string): Promise<string[]> {
    const aggr = await aggregate.Get<AggregateType>({
        address: account.address,
        key: 'AmazingVote',
        APIServer: DEFAULT_API_V2,
    });

    program.Spawn({
    });



    return aggr.comitee;

} */
