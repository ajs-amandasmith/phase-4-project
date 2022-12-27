class FanartsController < ApplicationController
  skip_before_action :authorize

  def index
    render json: Fanart.all, include: :user
  end

  def show
    render json: @current_user.fanarts
  end

  def create
    fanart = @current_user.fanarts.create!(fanart_params)
    render json: fanart, include: @current_user, status: :created
  end

  private

  def fanart_params
    params.permit(:title, :image, :description, :series)
  end
end
