require 'rails_helper'

RSpec.describe HouseController, type: :controller do
  describe '#index' do
    it 'shows the index page' do
      get :index
      expect(response).to have_http_status(:success)
    end
  end
end
