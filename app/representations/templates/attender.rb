# module Templates::Attender
#   extend ActiveSupport::Concern
#   included do
#     api_accessible :attender_user do |response|
#       response.add :attendanceOf, :template => :user_id
#     end

#     api_accessible :attender_event do |response|
#       response.add :attendingTo, :template => :embedded_event
#     end
#   end
# end
