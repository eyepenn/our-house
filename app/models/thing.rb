class Thing < ActiveRecord::Base
  validates :item, presence: true, length: { minimum: 3 }
  validates :room, presence: true, length: { minimum: 4 }
end
