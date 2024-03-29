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
    render json: @current_user
  end

  def fanarts
    render json: @current_user.fanarts
  end

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
