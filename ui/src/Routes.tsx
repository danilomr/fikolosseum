import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { WelcomeScreen } from './Welcome/Welcome';
import { Lobby } from './views/Lobby/Lobby';
import { Room } from './views/Room/Room';
import { RoundResults } from './views/RoundResults/RoundResults';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Redirect to="/welcome" />
		</Route>
		<Route path="/welcome">
			<WelcomeScreen />
		</Route>
		<Route path="/lobby">
			<Lobby />
		</Route>
		<Route path="/room">
			<Room />
		</Route>
		<Route path="/round-results">
			<RoundResults />
		</Route>
	</Switch>
);

export default Routes;
