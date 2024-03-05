import { ethereum } from 'aleph-sdk-ts/dist/accounts';
import { DEFAULT_API_V2 } from 'aleph-sdk-ts/dist/global';
import { aggregate, store } from 'aleph-sdk-ts/dist/messages';

export type Vote = {
	choice: string;
	proposalHash: string;
};

// TODO: check if an account is allowed to vote based on vrf
export async function isAllowedToVote(account: ethereum.ETHAccount): Promise<boolean> {
	return true;
}

// TODO
export async function vote(vote: Vote, account: ethereum.ETHAccount): Promise<void> {}

export async function getVotes(account: ethereum.ETHAccount): Promise<Vote[]> {
	return [];
}
