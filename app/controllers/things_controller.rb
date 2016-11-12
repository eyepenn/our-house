class ThingsController < ApplicationController
  def index
    render json: Thing.all
  end

  def create
    thing = Thing.create(thing_params)
    render json: thing
  end

  def show
    thing = Thing.find(params[:id])
    render json: thing
  end

  def destroy
    thing = Thing.find(params[:id])
    thing.destroy
  end

  private

  def thing_params
    params.require(:thing).permit(:item, :room)
  end
end
