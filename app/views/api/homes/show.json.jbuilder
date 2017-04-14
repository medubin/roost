
json.extract! @home,  :id, :name, :address
json.isHousemate @isHousemate

json.users @home.housemates do |housemate|
  json.username housemate.user.username
  json.admin housemate.admin
end
