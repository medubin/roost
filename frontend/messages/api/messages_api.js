export const createMessage = (homeId, message) => {
  return $.ajax({
    method: 'POST',
    url: 'api/homes/' + homeId + '/messages',
    data: {
      message: {
        message: message,
        home_id: homeId
      }
    }
  })
}

export const fetchMessages = (homeId) => {
  return $.ajax ({
    method: 'GET',
    url: 'api/homes/' + homeId + '/messages'
  })
}
