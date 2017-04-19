import merge from 'lodash/merge';
import {RECEIVE_USER} from '../actions/user_actions'

const _defaultState = Object.freeze({
  user: {}
})

const UserReducer = (state = _defaultState, action) => {
  let newState = merge({}, state)
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_USER:
    newState.user = action.user
    return newState
  default:
    return state
  }
}

export default UserReducer
