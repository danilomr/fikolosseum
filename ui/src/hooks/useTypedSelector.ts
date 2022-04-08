import { createSelectorHook } from 'react-redux';
import { AppState } from 'store/appState';

/**
 * Should be used when you need to access the fabstracta redux state. This hook will prevent having
 * to add types to useSelector hooks spread across the project. The hook also gives some internal
 * development niceness when accessing state by providing the first levels in the auto suggestions.
 *
 * Read more here: https://fabstracta.fnox.se/statetree#appstate
 */
export const useTypedSelector = createSelectorHook<AppState>();
