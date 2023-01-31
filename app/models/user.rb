class User < ApplicationRecord
  has_many :fanarts
  has_many :comments
  has_many :fanarts, through: :comments

  has_secure_password

  validates :username, presence: true, uniqueness: true

  def my_fanart
    # fanarts = Fanart.all.find()
    # Search all fanart for the current user's user_id
    # Get all fanart
    # iterate through fanart
      # When the id is found, filter it into a new array

      # [1,2,3,4,5].select {|num| num.even? } 

    fanarts = Fanart.all
    fanarts.select { |fanart| fanart.user_id == self.id }

  end

  def commented_fanart
    # Get all fanart
    # iterate through the fanart
      # filter fanart if it has comments
        # if a comment's user_id matches user's id, filter it out

    fanarts = Fanart.all
    fanarts.select do |fanart|
      fanart.comments.select do |comment|
        comment.user_id == self.id
      end
    end
  end

end
