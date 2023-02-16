class RemoveUserIdFromFanarts < ActiveRecord::Migration[6.1]
  def change
    remove_column :fanarts, :user_id, :integer
  end
end
