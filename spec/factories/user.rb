FactoryGirl.define do
  factory :user do
    name "Foo"
    surname "Bar"
    email "foo@bar.org"
    gender "male"
    age 27
    password "foobarfoobar"
    password_confirmation "foobarfoobar"
  end

  factory :invalid_user, class: User do
    name "Fo"
    surname "Ba"
    email "em@"
    gender "m"
    age 11
    password "foobar"
    password_confirmation "foofoo"
  end
end