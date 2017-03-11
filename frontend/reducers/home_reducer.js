// import actions

import {RECEIVE_HOMES, RECEIVE_ERRORS} from '../actions/home_actions'
import merge from 'lodash/merge';

const _nullHomes = Object.freeze({
  homes: []
});

const HomeReducer = (state = _nullHomes, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_HOMES:
      const currentHomes = action.currentHomes;
      return merge({}, _nullHomes, {currentHomes})
    default:
      return state;
  }
}

export default HomeReducer;
