import * as APIUtil from '../util/home_api_util';

export const RECEIVE_HOMES = "RECEIVE_HOMES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_ACTIVE_HOME = "RECEIVE_ACTIVE_HOME"


export const createHome = home => dispatch => (
  APIUtil.createHome(home)
    .then (
      homes => dispatch(receiveHomes()),
      err  => dispatch(receiveErrors(err.responseJSON)))
  );



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
