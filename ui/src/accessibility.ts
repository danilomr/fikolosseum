import React from 'react';
import ReactDOM from 'react-dom';

// Test your React application with the axe-core accessibility testing library.
// https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react
// Results will show in the Chrome DevTools console.
if (process.env.NODE_ENV !== 'production') {
	const config = {
		rules: [
			{ id: 'landmark-one-main', enabled: false },
			{ id: 'page-has-heading-one', enabled: false },
			{ id: 'region', enabled: false },
		],
	};
	/* eslint-disable @typescript-eslint/no-var-requires */
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000, config);
}
