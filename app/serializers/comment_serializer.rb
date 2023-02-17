class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user, :fanart

  belongs_to :user
  belongs_to :fanart
end
