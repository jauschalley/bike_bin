class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :email, null: false
      t.string :postable_type, null: false
      t.integer :postable_id, null: false

      t.timestamps
    end
  end
end
