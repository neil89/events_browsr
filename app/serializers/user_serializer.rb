class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :surname,
             :email,
             :gender,
             :age,
             :password,
             :password_confirmation
end             