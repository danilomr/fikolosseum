import { applyMiddleware, createStore, compose, Middleware } from 'redux';
import thunk from 'redux-thunk';
import { actionValidator } from '@fnox/fabstracta-platform';
import { ACTIONS } from '../actions/definitions';
import { rootReducer } from './rootReducer';

function configureStore() {
	const middlewares: Middleware[] = [thunk];

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(actionValidator(ACTIONS));
		/* eslint-disable @typescript-eslint/no-var-requires */
		middlewares.push(require('redux-logger').logger);
	}

	const composeEnhancers =
		(process.env.NODE_ENV !== 'production' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
	return store;
}

export const store = configureStore();
