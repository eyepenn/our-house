require 'rails_helper'

RSpec.describe ThingsController, type: :controller do
  describe 'things#index' do
    it 'lists the things in the database' do
      FactoryGirl.create(:thing)
      FactoryGirl.create(:thing)
      get :index
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(2)
    end
  end

  describe 'things#create' do
    it 'allows new tasks to be created' do
      post :create, params: { thing: { item: 'Sprinkler', room: 'yard' } }
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value['item']).to eq('Sprinkler')
      expect(response_value['room']).to eq('yard')
      expect(Thing.last.item).to eq('Sprinkler')
      expect(Thing.last.room).to eq('yard')
    end
  end
end
