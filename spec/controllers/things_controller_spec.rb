require 'rails_helper'

RSpec.describe ThingsController, type: :controller do
  describe 'things#index' do
    it 'it should list the things in the database' do
      thing1 = FactoryGirl.create(:thing)
      thing2 = FactoryGirl.create(:thing)
      get :index
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value.count).to eq(2)
      response_ids = response_value.collect do |thing|
        thing['id']
      end
      expect(response_ids).to eq([thing1.id, thing2.id])
    end
  end

  describe 'thing#create' do
    it 'it should allow a new thing to be created' do
      post :create, thing: { item: 'Sprinkler', room: 'Yard' }
      expect(response).to have_http_status :success
      response_value = ActiveSupport::JSON.decode(@response.body)
      expect(response_value['item']).to eq('Sprinkler')
      expect(response_value['room']).to eq('Yard')
      expect(Thing.last.item).to eq('Sprinkler')
      expect(Thing.last.room).to eq('Yard')
    end
  end

  describe 'things#destroy' do
    it 'should allow destroy of a thing' do
      thing = FactoryGirl.create(:thing)
      delete :destroy, id: thing.id
    end
  end
end
