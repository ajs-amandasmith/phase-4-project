Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

   # route to test your configuration
  resources :users, only: [:index, :create, :destroy]

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"

  get '/hello', to: 'application#hello_world'

  get '*patch',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
