import * as types from './actionTypes';
/**
 * An Action creator
 *
 * @export
 * @param {*} driftEvent
 * @returns
 */
export function createDriftEvent(driftEvent){
	return {
		type: types.CREATE_DRIFT_EVENT,
		driftEvent
	};
}

/**
 * In this above example, we are using an ES6 feature which allows
 * us to be a bit more terse when creating an object. Notice how
 * driftEvent doesn't have a matching value. We could also do:
 *
 export function createDriftEvent(driftEvent){
	return {
		type: 'CREATE_DRIFT_EVENT',
		driftEvent: driftEvent
	}
}
*
 */
