import * as APIUtil from '../api/messages_api';


export const createMessage = (homeId, message) => dispatch => (
  APIUtil.createMessage(homeId, message)
    // .then (
    //   homes => {dispatch(receiveHomes())},
    //   err  => dispatch(receiveErrors(err.responseJSON)))
  );
