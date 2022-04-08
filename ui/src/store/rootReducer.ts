import { stateTree } from '@fnox/fabstracta-platform';
import { welcomeReducer } from '../Welcome/welcomeReducer';

stateTree.addEntityReducers(welcomeReducer);
const rootReducer = stateTree.initialize({
	f: () => null,
});

export { rootReducer };
