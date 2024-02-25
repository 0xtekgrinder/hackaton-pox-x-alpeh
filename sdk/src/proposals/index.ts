import { DEFAULT_API_V2 } from 'aleph-sdk-ts/dist/global';
import { aggregate, store } from 'aleph-sdk-ts/dist/messages';
import { ethereum } from 'aleph-sdk-ts/dist/accounts';

export type Proposal = {
    title: string;
    description: string;
    choices: string[];
}

export type AggregateType = {
    proposals: string[];
    comitee: string[];
}

export async function createProposal(proposal: Proposal, account: ethereum.ETHAccount): Promise<void> {
    const fileHashPublishStore = await store.Publish({
        channel: 'AmazingVote',
        account: account,
        fileObject: Buffer.from(
            JSON.stringify(proposal),
        ),
        APIServer: DEFAULT_API_V2,
    });

    const aggr = await aggregate.Get<AggregateType>({
        address: account.address,
        key: 'AmazingVote',
        APIServer: DEFAULT_API_V2,
    });

    aggr.proposals.push(fileHashPublishStore.item_hash);

    await aggregate.Publish<AggregateType>({
        channel: 'AmazingVote',
        account: account,
        address: account.address,
        key: 'AmazingVote',
        APIServer: DEFAULT_API_V2,
        content: aggr,
    });
}

export async function getProposals(account: ethereum.ETHAccount): Promise<Proposal[]> {
    const aggr = await aggregate.Get<AggregateType>({
        address: account.address,
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
}

export async function getComitee(account: ethereum.ETHAccount): Promise<string[]> {
    const aggr = await aggregate.Get<AggregateType>({
        address: account.address,
        key: 'AmazingVote',
        APIServer: DEFAULT_API_V2,
    });

    return aggr.comitee;
}

export async function addComiteeMember(account: ethereum.ETHAccount, address: string): Promise<void> {
    const aggr = await aggregate.Get<AggregateType>({
        address: account.address,
        key: 'AmazingVote',
        APIServer: DEFAULT_API_V2,
    });

    aggr.comitee.push(address);

    await aggregate.Publish<AggregateType>({
        channel: 'AmazingVote',
        account: account,
        address: account.address,
        key: 'AmazingVote',
        APIServer: DEFAULT_API_V2,
        content: aggr,
    });
}
