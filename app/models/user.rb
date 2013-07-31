class User
  include Mongoid::Document

  field :name, type: String
  field :surname, type: String
  field :email, type: String
  field :gender, type: String
  field :age, type: Integer
  field :password, type: String
  field :password_confirmation, type: String

  validates :name, presence: true, length: { minimum: 3, maximum: 20 }

  validates :surname, presence: true, length: { minimum: 3, maximum: 20 }

  VALID_EMAIL_REGULAR_EXP = /\A([a-z][\w+\-.]+)@[a-z][a-z\d\-.]+\.[a-z][a-z]+/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGULAR_EXP }

  validates :gender, presence: true, inclusion: [ "male", "female" ]

  validates :age, presence: true, numericality: { only_integer: true, greater_than_or_equal_to: 18, less_than_or_equal_to: 120 }

  validates :password, presence: true, length: { minimum: 8 }
  validates :password_confirmation, presence: true
  
  validate :passwords_should_match

  
  def passwords_should_match
    errors.add(:password_confirmation, "Password confirmation doesn't match with password") unless password == password_confirmation
  end
end

