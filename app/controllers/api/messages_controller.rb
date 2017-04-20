class Api::MessagesController < ApplicationController

  def index
    @messages = Message.includes(:user).where(home_id: params[:home_id])
    # debugger
    render "api/messages/index"
  end

  def create

    if (!current_user)
      render json: "User not found", status: 422
    end

      @message = Message.new(message_params)
      @message.user_id = current_user.id

      if !@message.save
        render json: @message.errors.full_messages, status: 422
      end



  end


  private
  def message_params
    params.require(:message).permit(:home_id, :message)
  end


end
