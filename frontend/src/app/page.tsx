import React from 'react';

import { Footer, Header, TabSelector } from '../components';

export default function Home(): React.ReactNode {
	return (
		<main>
			<Header />
			<TabSelector />
			<Footer />
		</main>
	);
}
