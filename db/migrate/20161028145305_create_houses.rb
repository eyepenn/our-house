class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |t|
      t.string :item
      t.string :room
      t.timestamps
    end
  end
end
