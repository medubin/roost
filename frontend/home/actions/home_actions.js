import * as APIUtil from '../util/home_api';

export const RECEIVE_ACTIVE_HOME = "RECEIVE_ACTIVE_HOME"

export const fetchActiveHome = (id) => dispatch => {
  APIUtil.fetchActiveHome(id)
    .then(activeHome => dispatch(receiveActiveHome(activeHome)))
  };

export const joinHome = (homeId) => dispatch => {
  APIUtil.joinHome(homeId)
  .then(activeHome => dispatch(receiveActiveHome(activeHome)))
};


export const receiveActiveHome = (activeHome) => ({
  type: RECEIVE_ACTIVE_HOME,
  activeHome
});


export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
