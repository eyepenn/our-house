class HouseController < ApplicationController
  def index
    @house = House.all
  end
end
