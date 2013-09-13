FactoryGirl.define do
  factory :event do
    title "Event"
    date  "01/23/4567"
    place "World"
    description "A brief description"
    user
  end

  factory :invalid_event do
    title "Ev"
    date "1/13/9999"
    place ""
    description "Desc"
    user_id "0"
  end
end