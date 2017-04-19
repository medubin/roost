import * as APIUtil from '../util/home_index_api';

export const RECEIVE_HOMES = "RECEIVE_HOMES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const fetchHomes = () => dispatch => {
  APIUtil.fetchHomes()
    .then(homes => dispatch(receiveHomes(homes)))
  };



export const receiveHomes = (homes) => ({
      type: RECEIVE_HOMES,
      homes
  });


export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
