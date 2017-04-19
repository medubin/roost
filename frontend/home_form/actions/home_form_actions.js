import * as APIUtil from '../util/home_form_api';


export const createHome = home => dispatch => (
  APIUtil.createHome(home)
    // .then (
    //   homes => {dispatch(receiveHomes())},
    //   err  => dispatch(receiveErrors(err.responseJSON)))
  );
