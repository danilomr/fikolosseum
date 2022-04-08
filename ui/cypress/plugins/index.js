/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('@cypress/webpack-preprocessor');
const getWebpackConfig = require('../../webpack.config').default;
const codeCoverageTask = require('@cypress/code-coverage/task');

const webpackOptions = getWebpackConfig({ WEBPACK_BUILD: true, WEBPACK_BUNDLE: true });

module.exports = (on, config) => {
	config.env.TAGS = process.env.TAGS;
	codeCoverageTask(on, config);

	on('file:preprocessor', webpack({ webpackOptions }));

	return config;
};
