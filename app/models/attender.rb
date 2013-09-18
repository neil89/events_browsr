class Attender
  include Mongoid::Document

  acts_as_api
  include Templates::User
  include Templates::Event
  include Templates::Attender

  belongs_to :attendanceOf, class_name: "User", inverse_of: :attendances
  belongs_to :attendingTo, class_name: "Event", inverse_of: :attendings
end