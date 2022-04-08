import { assoc } from '@fnox/fabstracta-funky';
import { ACTIONS } from '../actions/definitions';

interface WelcomeState {
	welcome: {
		hello: string;
		clicks: number;
	};
}

const initialState = {
	welcome: {
		hello: 'Why hello, I am initial state!',
		clicks: 0,
	},
};

export const welcomeReducer = (state: WelcomeState = initialState, action) => {
	switch (action.type) {
		case ACTIONS.INCREASE_CLICKS: {
			const { welcome } = state;
			return assoc(state, 'welcome.clicks', welcome.clicks + 1);
		}
		default:
			return state;
	}
};
