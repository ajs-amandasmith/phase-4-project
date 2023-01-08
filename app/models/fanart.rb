class Fanart < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :users, through: :comments


  validates :title, :description, :image, :series, presence: true
end
