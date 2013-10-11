class EventSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :date,
             :place,
             :description

  has_one :user, embed: :id
  has_many :attendings, embed: :ids
end             