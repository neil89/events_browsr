class Event
  include Mongoid::Document

  field :title, type: String
  field :date, type: String
  field :place, type: String
  field :description, type: String

  acts_as_api
  include Templates::Event
  include Templates::Attender

  validates :title, presence: { message: "blank" }, length: { minimum: 3, message: "length" }

  VALID_DATE_FORMAT = /\d{2}\/\d{2}\/\d{4}/
  validates :date, presence: { message: "blank" }, format: { with: VALID_DATE_FORMAT, message: "invalid" }

  validates :place, length: { minimum: 3, message: "length" }

  validates :description, length: { minimum: 8, message: "length" }

  belongs_to :user

  has_many :attendings, class_name: "Attender", inverse_of: :attendingTo

  def formatStringDate
    @date = self.date
    return @date.at(6..9) + @date.at(3..4) + @date.at(0..1)
  end

  # has_and_belongs_to_many :attendances, class_name: "User" , inverse_of: :attendings
end