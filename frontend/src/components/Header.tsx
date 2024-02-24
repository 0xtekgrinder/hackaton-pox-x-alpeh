import React from 'react';

export default function Header(): React.ReactNode {
	return (
		<header className="bg-gray-900">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="text-white">Random Election System</span>
					</a>
				</div>
				<div className="py-6">
					<button className="flex w-full max-w-xs rounded-full bg-indigo-500 px-6  py-3 text-white hover:bg-indigo-700 focus:bg-indigo-700">
						Log in
					</button>
				</div>
			</nav>
		</header>
	);
}
