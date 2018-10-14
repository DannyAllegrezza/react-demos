import * as types from '../actions/actionTypes';

/**
 *
 *
 * @export
 * @param {*} state The current State
 * @param {*} action The action used to modify the state
 */
export default function driftEventReducer(state = [], action){
	// note: we are taking advantage of ES6 default parameters to set
	// state to an empty array, which be used to hold our drift events

	switch (action.type) {
		case types.CREATE_DRIFT_EVENT:
			//state.push(action.driftEvent);
			//return state;
			return [...state, Object.assign({}, action.driftEvent)];
		default:
			return state;
	}
}
