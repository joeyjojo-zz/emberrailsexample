EmberDataExample::Application.routes.draw do
  resources :contacts, :products
  root :to => 'application#index'
  match '/*path' => 'application#index'
end
