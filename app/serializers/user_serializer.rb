class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :surname,
             :email,
             :gender,
             :age,
             :password,
             :password_confirmation
             
  has_many :events, embed: :ids
  has_many :attendance, embed: :ids
end             