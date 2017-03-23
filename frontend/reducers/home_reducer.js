import {RECEIVE_HOMES, RECEIVE_ERRORS, RECEIVE_ACTIVE_HOME} from '../actions/home_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  homes: [],
  activeHome: {},
  errors: []
});

const HomeReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOMES:
      newState.homes = action.homes;
      return newState;
    case RECEIVE_ACTIVE_HOME:
      newState.activeHome = action.activeHome
      return newState



    // case RECEIVE_ERRORS:
      // const errors = action.errors;
      // return merge({}, _nullHomes, {errors});
    default:
      return state;
  }
}

export default HomeReducer;
