class FanartsController < ApplicationController
  # skip_before_action :authorize

  def index
    render json: Fanart.all, include: [ :user => { :except => [:password_digest, :created_at, :updated_at] }, 
                                        :comments => { :include => { :user => { :except => [:password_digest, :created_at, :updated_at] } } } ]
  end

  def show
    fanart = Fanart.find(params[:id])
    render json: fanart, include: [ :user => { :except => [:password_digest, :created_at, :updated_at] },
                                    :comments => { :include => { :user => { :except => [:password_digest, :created_at, :updated_at] }
                                    } } ]
  end

  def create
    fanart = @current_user.fanarts.create!(fanart_params)
    render json: fanart, status: :created
  end

  def update
    fanart = Fanart.find(params[:id])
    fanart.update(fanart_params)
    render json: fanart, status: :created, include: [ :user => { :except => [:password_digest, :created_at, :updated_at] },
                                                      :comments => { :include => { :user => { :except => [:password_digest, :created_at, :updated_at] }
                                                      } } ]
  end

  def destroy
    fanart = Fanart.find(params[:id])
    fanart.delete
    head :no_content
  end

  private

  def fanart_params
    params.permit(:title, :image, :description, :series)
  end
end
