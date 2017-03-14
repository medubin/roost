import { recieveCurrentHomes, receiveErrors } from '../actions/home_actions'

export const createHome = (home) => {
  return $.ajax({
    method: 'POST',
    url: 'api/homes',
    data: home,
  });
};

export const fetchHomes = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/homes'
  });
};
