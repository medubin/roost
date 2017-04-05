// import { receiveCurrentHomes, receiveErrors } from '../actions/home_actions'

export const createHome = (home) => {
  return $.ajax({
    method: 'POST',
    url: 'api/homes',
    data: home
  });
};

export const fetchHomes = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/homes'
  });
};

export const fetchActiveHome = (id) => {
  return $.ajax ({
    method: 'GET',
    url: 'api/homes/' + id
  });
};

export const joinHome = (homeId) => {
  let data = {housemate: {home_id: homeId}}
  return $.ajax ({
    method: 'POST',
    url: 'api/housemates/',
    data: data
  })
}
