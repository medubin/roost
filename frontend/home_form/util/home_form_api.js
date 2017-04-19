export const createHome = (home) => {
  return $.ajax({
    method: 'POST',
    url: 'api/homes',
    data: home
  });
};
