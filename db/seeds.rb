# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "🌱 Seeding data..."

10.times do
  user = User.create(
    username: Faker::Name.name,
    password_digest: Faker::Name.name,
    nickname: Faker::FunnyName.name,
    image_url: Faker::Avatar.image
  )

  rand(1..5).times do
    fanart = Fanart.create(
      title: Faker::Lorem.word,
      image: Faker::LoremFlickr.image,
      description: Faker::Lorem.paragraph,
      series: Faker::Lorem.word,
      user_id: user.id
    )
    rand(1..2).times do
      Comment.create(
        comment: Faker::Lorem.sentence,
        user_id: user.id,
        fanart_id:fanart.id
      )
    end
  end
end


puts "✅ Done seeding!"