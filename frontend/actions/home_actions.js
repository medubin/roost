import * as APIUtil from '../util/home_api_util'

export const RECEIVE_HOMES = "RECIEVE HOMES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const createHome = home => dispatch => (
  APIUtil.createHome(home)
    .then (
      homes => dispatch(recieveCurrentHomes()),
      err  => dispatch(recieveErrors(err.responseJSON)))
  );

  export const fetchHomes = () => (
    APIUtil.fetchHomes()
    .then(homes => dispatch(receiveHomes(homes)))
    );


export const recieveHomes = homes => ({
  type: RECEIVE_HOMES,
  homes
});

export const recieveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
