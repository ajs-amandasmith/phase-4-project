class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :nickname, :image_url, :fanarts

  has_many :fanarts, serializer: FanartSerializer
end
