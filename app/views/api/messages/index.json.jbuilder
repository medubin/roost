json.array! @messages do |message|
  json.message message.message
  json.user message.user.username
end
