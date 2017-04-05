class Api::HousematesController < ApplicationController

  def create
    @housemate = Housemate.new(
      user_id: current_user.id,
      home_id: housemate_params[:home_id])


    if @housemate.save
      @isHousemate  = true
      @home = Home.includes(:users, :housemates).find(housemate_params[:home_id])

      render "api/homes/show"
    end


  end

  private
  def housemate_params
    params.require(:housemate).permit(:home_id)
  end


end
