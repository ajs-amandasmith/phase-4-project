class FanartSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :description, :series, :user, :comments

  belongs_to :user, serializer: FanartUsersSerializer
  has_many :comments, serializer: FanartCommentSerializer
end
