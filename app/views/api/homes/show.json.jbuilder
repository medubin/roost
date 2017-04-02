
json.extract! @home, :name, :address

json.users @home.housemates do |housemate|
  json.username housemate.user.username
  json.admin housemate.admin
end
