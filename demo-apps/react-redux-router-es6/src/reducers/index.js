import { combineReducers } from 'redux';
import driftEvents from './driftEventReducer'; // export default means we can alias this

const rootReducer = combineReducers({
	driftEvents : driftEvents // traditional property name
	// driftEvents = short hand property name
});

export default rootReducer;
