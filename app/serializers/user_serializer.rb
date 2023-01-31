class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :nickname, :image_url

  has_many :fanarts

end
