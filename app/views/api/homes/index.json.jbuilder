# @homes.each do |home|
#   json.partial! "api/homes/home", home: home
# end
#

json.array @homes, :name, :address
