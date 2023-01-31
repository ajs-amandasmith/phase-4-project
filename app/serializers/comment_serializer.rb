class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user

  belongs_to :user
  belongs_to :fanart
end
