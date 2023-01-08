class User < ApplicationRecord
  has_many :fanarts
  has_many :comments
  has_many :fanarts, through: :comments

  has_secure_password

  validates :username, presence: true, uniqueness: true
end
