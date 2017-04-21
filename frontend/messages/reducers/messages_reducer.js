import {RECEIVE_MESSAGES} from '../actions/messages_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  messages: [],

});

const MessagesReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_MESSAGES:
      console.log(action)
      newState.messages = action.messages;
      return newState;
    // case RECEIVE_ERRORS:
      // const errors = action.errors;
      // return merge({}, _nullHomes, {errors});
    default:
      return state;
  }
}

export default MessagesReducer;
