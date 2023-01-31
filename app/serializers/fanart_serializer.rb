class FanartSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :series

  belongs_to :user
  has_many :comments
end
