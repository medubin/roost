import {RECEIVE_ACTIVE_HOME} from '../actions/home_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  activeHome: {},
});

const HomeReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ACTIVE_HOME:
      newState.activeHome = action.activeHome;
      return newState;

    default:
      return state;
  }
}

export default HomeReducer;
