Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resource :home, only: [:create, :show, :index]
  end

  root "static_pages#root"
end
