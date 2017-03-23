# json.partial! "api/homes/home", home: @home

json.extract! @home, :name, :address


json.users do
  json.array! @home.users, :username
  json.array! @home.housemates, :admin
end
