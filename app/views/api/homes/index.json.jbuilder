@homes.each do |home|
  json.partial! "api/homes/home", home: home
end
