class CreateThings < ActiveRecord::Migration
  def change
    create_table :things do |t|
      t.string :item
      t.string :room
      t.timestamps
    end
  end
end
