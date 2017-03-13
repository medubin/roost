import * as APIUtil from '../util/home_api_util'

export const RECEIVE_HOMES = "RECIEVE HOMES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const createHome = home => dispatch => (
  APIUtil.createHome(home)
    .then (
      homes => dispatch(recieveCurrentHomes()),
      err  => dispatch(recieveErrors(err.responseJSON)))
  );


export const recieveCurrentHomes = home => ({
  type: RECEIVE_HOMES,
  home
});

export const recieveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
