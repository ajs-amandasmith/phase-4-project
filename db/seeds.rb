# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding data..."

User.destroy_all
Fanart.destroy_all
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('fanarts')
ActiveRecord::Base.connection.reset_pk_sequence!('comments')

10.times do
  user = User.create(
    username: Faker::Name.name,
    password_digest: Faker::Name.name,
    nickname: Faker::FunnyName.name,
    image_url: Faker::Avatar.image
  )
end

10.times do
  fanart = Fanart.create(
    title: Faker::Lorem.word,
    image: Faker::LoremFlickr.image,
    description: Faker::Lorem.paragraph,
    series: Faker::Lorem.word
  )

  rand(1..2).times do
    Comment.create(
      comment: Faker::Lorem.sentence,
      user_id: rand(1..10),
      fanart_id:fanart.id
    )
  end
end



puts "✅ Done seeding!"