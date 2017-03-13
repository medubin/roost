import { recieveCurrentHomes, receiveErrors } from '../actions/home_actions'

export const createHome = (home) => {
  return $.ajax({
    method: 'POST',
    url: 'api/home',
    data: home,
  });
};

export const showHomes = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/home'
  });
};
