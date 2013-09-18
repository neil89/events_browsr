class AttenderSerializer < ActiveModel::Serializer

  has_one :attendanceOf, embed: :id
  has_one :attendingTo, embed: :id
end             