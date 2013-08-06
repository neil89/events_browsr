module Templates::User 
  extend ActiveSupport::Concern
  included do
    api_accessible :unprocessable_user do |response|
      response.add :name
      response.add :surname
      response.add :email
      response.add :gender
      response.add :age
      response.add :password
      response.add :password_confirmation
    end
  end
end