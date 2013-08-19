FactoryGirl.define do
  factory :user do
    name "Foo"
    surname  "Bar"
    email "foo@bar.org"
    gender "male"
    age 27
    password "foobarfoobar"
    password_confirmation "foobarfoobar"
  end
end