class FanartSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :series, :comments

  has_many :comments, serializer: CommentInFanartSerializer
end
