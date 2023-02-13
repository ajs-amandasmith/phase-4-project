class FanartCommentSerializer < ActiveModel::Serializer
  attributes :comment, :user, :user_id, :id
end