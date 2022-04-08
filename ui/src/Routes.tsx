import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { WelcomeScreen } from './Welcome/Welcome';

const Routes = () => (
	<Switch>
		<Route exact path="/">
			<Redirect to="/welcome" />
		</Route>
		<Route path="/welcome">
			<WelcomeScreen />
		</Route>
	</Switch>
);

export default Routes;
