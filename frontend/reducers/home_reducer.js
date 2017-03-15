import {RECEIVE_HOMES, RECEIVE_ERRORS} from '../actions/home_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  homes: [],
  errors: []
});

const HomeReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOMES:
      newState.homes = action.homes['array'];
      return newState;



    // case RECEIVE_ERRORS:
      // const errors = action.errors;
      // return merge({}, _nullHomes, {errors});
    default:
      return state;
  }
}

export default HomeReducer;
