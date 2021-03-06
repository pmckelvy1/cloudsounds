class Api::PlaylistsController < ApplicationController
  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.user_id = current_user.id
    if @playlist.save
      @playlist_item = PlaylistItem.new(playlist_id: @playlist.id, song_id: params[:playlist][:song_id], song_ord: 0)
      if @playlist_item.save
        @playlist = Playlist.includes(:user, playlist_items: [song: [:likes, :user, comments: [:user]]]).find(@playlist.id)
        render :show
      else
        @playlist.destroy!
        render json: ['that song is already in another playlist'], status: 422
      end
    else
      render json: ['playlist could not be saved']
    end
  end

  def show
    @playlist = Playlist.includes(:user, playlist_items: [:playlist, song: [:likes, :user, comments: [:user]]]).find(params[:id])
    render :show
  end

  def index
  end

  def edit
  end

  def update
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render json: [playlist_id: @playlist.id]
  end

  private
    def playlist_params
      params.require(:playlist).permit(:title)
    end
end
