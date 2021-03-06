import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialAppState) {
	return createStore(
		rootReducer,
		initialAppState,
		applyMiddleware(reduxImmutableStateInvariant())
	);
}
