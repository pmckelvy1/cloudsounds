class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params)
    if @comment.save
      render :show
    else
      render json: ['could not save comment']
    end
  end

  def index
    @comment = Comment.where(song_id: params[:song_id])
    render :index
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end

  private
    def comment_params
      params.require(:comment).permit(:song_id, :body)
    end
end