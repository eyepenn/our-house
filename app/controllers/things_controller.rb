class ThingsController < ApplicationController
  def index
    render json: Thing.all
  end

  def create
    thing = Thing.create(thing_params)
    thing.id
    render json: thing
  end

  def show
    thing = Thing.find(params[:id])
    render json: thing
  end

  def destroy
    thing = Thing.find(params[:id])
    thing.destroy
    respond_to do |format|
        format.html { render nothing: true }
        format.js { render nothing: true }
    end
  end

  private

  def thing_params
    params.require(:thing).permit(:item, :room)
  end
end
