import { useDispatch as useDispatchOriginal } from 'react-redux';
import { Action, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { FabstractaState } from '@fnox/fabstracta-platform';

/**
 * A hook to access the redux `dispatch` function. With typing for `redux-thunk`
 */
export const useDispatch = <A extends Action = AnyAction, S extends FabstractaState = FabstractaState>() =>
	useDispatchOriginal<ThunkDispatch<S, any, A>>();
