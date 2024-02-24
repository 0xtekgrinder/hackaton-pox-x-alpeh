import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({ dir: './' });

const config: Config = {
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	rootDir: '.',
	testRegex: '.*\\.spec\\.ts$',
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
	coverageDirectory: '<rootDir>/coverage',
	passWithNoTests: true,
	verbose: true,
};
export default createJestConfig(config);
