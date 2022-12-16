class CreateFanarts < ActiveRecord::Migration[6.1]
  def change
    create_table :fanarts do |t|
      t.string :title
      t.string :image
      t.string :description
      t.string :series
      t.integer :user_id

      t.timestamps
    end
  end
end
