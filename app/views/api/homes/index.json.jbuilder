# @homes.each do |home|
#   json.partial! "api/homes/home", home: home
# end
#

json.array! @homes, :id, :name, :address
