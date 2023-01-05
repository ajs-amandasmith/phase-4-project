class FanartsController < ApplicationController
  # skip_before_action :authorize
  # self.primary_key = @current_user

  def index
    render json: Fanart.all, include: :user
  end

  def show
    render json: @current_user.fanarts
  end

  def create
    fanart = @current_user.fanarts.create!(fanart_params)
    render json: fanart, status: :created
  end

  private

  def fanart_params
    params.permit(:title, :image, :description, :series)
  end
end
