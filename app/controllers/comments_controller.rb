class CommentsController < ApplicationController

  def index
    render json: Comment.all.order(:id)
  end

  def create
    comment = @current_user.comments.create!(comment_params)
    render json: comment, status: :created, include: :user
  end

  def update
    comment = Comment.find_by(id: params[:id])
    comment.update(comment_params)
    render json: comment, status: :created
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.delete
    head :no_content
  end

  private

  def comment_params
    params.permit(:comment, :user_id, :fanart_id)
  end

end
