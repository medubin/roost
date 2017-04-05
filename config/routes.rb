Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :homes, only: [:create, :show, :index]
    resources :housemates, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:show]
    resource :user, only: [:create]

  end

  root "static_pages#root"
end
