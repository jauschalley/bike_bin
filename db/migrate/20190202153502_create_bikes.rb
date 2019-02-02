class CreateBikes < ActiveRecord::Migration[5.2]
  def change
    create_table :bikes do |t|
      t.integer :size
      t.string :size_unit
      t.string :color
      t.string :bike_type
      t.integer :condition
      t.string :brand
      t.string :model
      t.integer :year
      t.integer :miles

      t.timestamps
    end
  end
end
