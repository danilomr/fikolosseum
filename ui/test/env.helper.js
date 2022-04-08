/* eslint-disable */

const jsdom = require('jsdom');
const Enzyme = require('enzyme');
const Adapter = require('@wojtekmaj/enzyme-adapter-react-17');

Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = jsdom;

// setup the simplest document possible
// url is important otherwise localstorage fails.
// fid is required for some actions to work.
const { document } = new JSDOM('<!doctype html><html><body></body></html>', {
	url: 'http://localhost/appname/32-character-000000000padded-fid/',
}).window;

const doc = document;
// get the window object out of the document
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;

// from mocha-jsdom https://github.com/rstacruz/mocha-jsdom/blob/master/index.js#L80
function propagateToGlobal(window) {
	for (const key in window) {
		if (!window.hasOwnProperty(key)) {
			continue;
		}
		if (key in global) {
			continue;
		}

		global[key] = window[key];
	}
}

// take all properties of the window object and also attach it to the
// mocha global object
propagateToGlobal(win);

// Setup sessionStorage for testing purposes
const sessionStorage = {
	getItem(key) {
		return this[key];
	},
	setItem(key, value) {
		this[key] = value;
	},
};

window.sessionStorage = sessionStorage;
