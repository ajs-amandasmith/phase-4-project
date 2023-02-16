class AddDetailsToComments < ActiveRecord::Migration[6.1]
  def change
    add_column :comments, :comment_id, :integer
  end
end
