module Templates::User 
  extend ActiveSupport::Concern
  included do
    api_accessible :general_user do |response|
      response.add :name
      response.add :surname
      response.add :email
      response.add :gender
      response.add :age
    end

    api_accessible :unprocessable_user, :extend => :general_user  do |response|
      response.add :password
      response.add :password_confirmation
    end

    api_accessible :user_id do |response|
      response.add :id
    end

    api_accessible :login_failed do |response|
      response.add :login
    end

    def login
      "failed"
    end
  end
end
