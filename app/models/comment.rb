class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :fanart

  validates :comment, presence: true
end
