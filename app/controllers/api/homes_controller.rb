class Api::HomesController < ApplicationController
  def index
    if !current_user
      render json: "Must be logged in", status: 422
      return
    end
    @homes = current_user.homes
    render "api/homes/index"
  end

  def create
    @home = Home.new(home_params)
    if !@home.save
      render json: @home.errors.full_messages, status: 422
      return
    end

    @housemate = Housemate.new(
      user_id: current_user.id,
      admin: true,
      home_id: @home.id
    )
    if !@housemate.save
      render json: @housemate.errors.full_messages, status: 422
      return
    end

    render "api/homes/show"
  end

  def show
    @homes = Home.find(params[:id])
    render "api/homes/show"
  end


  private
  def home_params
    params.require(:home).permit(:name, :address)
  end

end
