module Templates::Attender
  extend ActiveSupport::Concern
  included do
    api_accessible :attender_user do |response|
      response.add :attendanceOf
    end

    api_accessible :attender_event do |response|
      response.add :attendingTo
    end
  end
end
