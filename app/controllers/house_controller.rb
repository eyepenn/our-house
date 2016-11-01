class HouseController < ApplicationController
  def index
    @yard = House.where(room: 'yard')
    @living = House.where(room: 'living')
    @kitchen = House.where(room: 'kitchen')
    @bed = House.where(room: 'bed')
    @bath = House.where(room: 'bath')
  end
end
