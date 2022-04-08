import { generateWebpackConfig } from '@fnox/fabstracta-webpack';
import CopyPlugin from 'copy-webpack-plugin';

export default generateWebpackConfig((_env, _argv, config) => {
	// Mutate config here if needed

	// NOTE: Copying fixtures to the build folder is only for demo purposes -
	// you don't need these in your app.
	config.plugins!.push(
		new CopyPlugin({
			patterns: [
				{ from: 'cypress/fixtures/cities.json' },
				{ from: 'cypress/fixtures/transactions.json' },
				{ from: 'cypress/fixtures/users.json' },
				{ from: 'cypress/fixtures/profile.json' },
			],
		})
	);
});
