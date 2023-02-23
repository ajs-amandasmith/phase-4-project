Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

   # route to test your configuration
  resources :users, only: [:index, :show, :destroy]
  resources :fanarts
  resources :comments

  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/commented-fanart", to: "users#fanarts"

  get '*patch',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
