class User
  include Mongoid::Document

  field :name, type: String
  field :surname, type: String
  field :email, type: String
  field :gender, type: String
  field :age, type: Integer
  field :password, type: String
  field :password_confirmation, type: String

  acts_as_api
  include Templates::User

  validates :name, presence: { message: "blank" }, length: { minimum: 3, maximum: 20, message: "length" }

  validates :surname, presence: { message: "blank" }, length: { minimum: 3, maximum: 20, message: "length" }

  VALID_EMAIL_REGULAR_EXP = /\A([a-z][\w+\-.]+)@[a-z][a-z\d\-.]+\.[a-z][a-z]+/i
  validates :email, presence: { message: "blank" }, format: { with: VALID_EMAIL_REGULAR_EXP, message: "invalid" }

  validates :gender, presence: { message: "blank" }, inclusion: { in: [ "male", "female" ], message: "invalid" }

  validates :age, presence: { message: "blank" }, numericality: { only_integer: true, message: "invalid", greater_than_or_equal_to: 18, message: "range", less_than_or_equal_to: 120, message: "range" }

  validates :password, presence: { message: "blank" }, length: { minimum: 8, message: "length" }
  validates :password_confirmation, presence: { message: "blank" }
  
  validate :passwords_should_match


  def passwords_should_match
    errors.add(:password_confirmation, "confirmation") unless password == password_confirmation
  end
end

