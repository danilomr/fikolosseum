import webpackDevServer from 'webpack-dev-server';
import { frontendEndpoint, IS_VESSEL_APP } from '../package.json';

const target = process.env.PROXY_TARGET || 'http://localhost:8080';

const defaultProxyOptions: webpackDevServer.ProxyConfigArrayItem = {
	target,
	secure: false,
	changeOrigin: true,
	cookieDomainRewrite: '',
	xfwd: true,
	logLevel: 'debug',
};

/*
 * Be wary of globbing rules, the pattern /foo-product?(/|/**) will match:
 *   - /foo-product
 *   - /foo-product/
 *   - /foo-product/the-rest/of/the/url
 * An invalid pattern /foo-product?(/**) will on the other hand only match
 *   - /foo-product
 *   - /foo-product/the-rest/of/the/url
 * and will not match for the trailing slash in /foo-product/ and will as
 * such not proxy.
 */

const proxydef: webpackDevServer.Configuration['proxy'] = [
	{
		context: ['/fs/**', '/sie/**'],
		...defaultProxyOptions,
		headers: { 'X-DEV-LOGINPROXY': '1' },
	},
	{
		context: ['/api/**', '/f2/**'],
		...defaultProxyOptions,
	},
	{
		context: ['/api/fikolosseum/', '/internalapi/fikolosseum/'],
		...defaultProxyOptions,
		target: 'http://localhost:8080',
	},
];

// Proxy definitions needed for apps running inside Vessel/F3
if (IS_VESSEL_APP) {
	proxydef.push({
		context: ['/**', `!/${frontendEndpoint}`, `!/${frontendEndpoint}/**`, '!/build/**'],
		...defaultProxyOptions,
		pathRewrite: {
			'^/$': '/fs/fs/login.php', // Redirect to login page instead of getting 404 Not Found for '/'
		},
	});
}

// Set environment variable when developing backend locally to proxy your api endpoint(s)
if (process.env.PROXY_API === '1') {
	proxydef.unshift({
		context: ['/api/something/**'],
		...defaultProxyOptions,
		target: 'http://localhost:8080',
	});
}

module.exports = proxydef;
