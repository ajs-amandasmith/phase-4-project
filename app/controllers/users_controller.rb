class UsersController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    render json: User.all
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user, include: [ :fanarts ]
  end

  # render json: fanart, include: [ :user => { :except => [:password_digest, :created_at, :updated_at] },
  # :comments => { :include => { :user => { :except => [:password_digest, :created_at, :updated_at] }
  # } } ]

  def destroy
    user = User.find(params[:id])
    user.delete
    head :no_content
  end

  private

  def user_params
    params.permit(:username, :password, :password_confirmation, :image_url, :nickname)
  end

end
