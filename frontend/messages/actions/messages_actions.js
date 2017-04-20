import * as APIUtil from '../api/messages_api';

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";


export const createMessage = (homeId, message) => dispatch => (
  APIUtil.createMessage(homeId, message)
    // .then (
    //   homes => {dispatch(receiveHomes())},
    //   err  => dispatch(receiveErrors(err.responseJSON)))
  );

  export const fetchMessages = (homeId) => dispatch => {
    APIUtil.fetchMessages(homeId)
      .then(messages => dispatch(receiveMessages(messages)))
    };


  export const receiveMessages = (messages) => ({
        type: RECEIVE_MESSAGES,
        messages
    });
