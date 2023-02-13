class User < ApplicationRecord
  has_secure_password

  has_many :fanarts
  has_many :comments
  has_many :fanarts, through: :comments

  validates :username, presence: true, uniqueness: true

  def create_fanart
    self.fanarts.create(:title, :image, :description, :series)
  end

  def my_fanart
    fanarts = Fanart.all
    fanarts.select { |fanart| fanart.user_id == self.id }
  end

  def commented_fanart
    comments = Comment.all
    comments = comments.select { |comment| comment.user_id == self.id }
    comments.collect { |comment| comment.fanart }
  end

end
