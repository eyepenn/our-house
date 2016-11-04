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
end
