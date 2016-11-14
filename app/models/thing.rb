class Thing < ActiveRecord::Base
  validates :item, presence: true
  validates :room, presence: true
end
