class CommentInFanartSerializer < ActiveModel::Serializer
  attributes :id, :comment, :user

  def user
    {
      id: object.user.id,
      username: object.user.username,
      image_url: object.user.image_url
    }
  end
end
