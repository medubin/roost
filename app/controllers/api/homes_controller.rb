class Api::HomesController < ApplicationController
  def index
    @homes = Home.all
    render "api/homes/index"
  end

  def create
    @home = Home.new(home_params)

    if @home.save
      render "api/homes/show"
    else
      render json: @home.errors.full_messages, status 422
    end
  end

  def show
    @homes = Home.find(params[:id])
    render "api/homes/show"
  end


  private
  def home_params
    params.require(:home).permit(:name, :adress)
  end

end
