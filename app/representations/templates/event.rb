module Templates::Event 
  extend ActiveSupport::Concern
  included do
    api_accessible :embedded_event do |response|
      response.add :id
      response.add :title
      response.add :date
      response.add :place
      response.add :description
    end

    api_accessible :general_event, :extend => :embedded_event do |response|
      response.add :user_id
      response.add :attending_ids, :template => :user_id
    end
  end
end
