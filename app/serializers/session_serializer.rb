class SessionSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :password,
             :login
end             