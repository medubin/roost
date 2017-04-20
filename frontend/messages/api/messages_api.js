export const createMessage = (homeId, message) => {
  return $.ajax({
    method: 'POST',
    url: 'api/homes/' + homeId + '/messages',
    data: {
      message: {
        message: message,
        home_id: home
      }
    }
  })
}
