import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer, getBaseName } from '@fnox/fabstracta';
import Routes from './Routes';
import './accessibility';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { Localize } from './components/Localize/Localize';
import './icons';
import { store } from './store/configureStore';
import './style/style.scss';

// Enable routing support for vessel
// Without vessel - https://localhost:9090
// With vessel - https://localhost:9090/fabstracta-template/<fid>
const [, appName] = window.location.pathname.split('/');
const basename = process.env.IS_VESSEL_APP ? getBaseName() || appName : undefined;

localStorage.setItem('framework', 'fabstracta');
// Routing configuration
const App: React.FunctionComponent = () => (
	<Router basename={basename}>
		<ErrorBoundary>
			<Provider store={store}>
				<AppContainer namespace={appName}>
					<Localize>{() => <Routes />}</Localize>
				</AppContainer>
			</Provider>
		</ErrorBoundary>
	</Router>
);

if (process.env.RENDER_APP === 'true') {
	const rootNode = document.getElementById('root');
	ReactDOM.render(<App />, rootNode);
}

export default App;
