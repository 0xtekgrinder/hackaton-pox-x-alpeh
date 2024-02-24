import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		fixturesFolder: 'test/fixtures',
		specPattern: 'test/e2e',
		screenshotsFolder: 'test/screenshots',
		videosFolder: 'test/videos',
		downloadsFolder: 'test/downloads',
		supportFile: 'test/support/e2e.ts',
		video: false,
	},
});
