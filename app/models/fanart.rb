class Fanart < ApplicationRecord
  belongs_to :user

  validates :title, :description, :image, :series, presence: true
end
