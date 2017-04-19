export const fetchActiveHome = (id) => {
  return $.ajax ({
    method: 'GET',
    url: 'api/homes/' + id
  });
};
