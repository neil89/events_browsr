require 'spec_helper'

describe User do

  before do
    @user = User.new(
                      name:                  "Example",
                      surname:               "User",
                      email:                 "example@test.org",
                      gender:                "male",
                      age:                   23,
                      password:              "foooobar",
                      password_confirmation: "foooobar")
  end

  subject { @user }

  it { should have_field(:name) }
  it { should have_field(:surname) } 
  it { should have_field(:email) }
  it { should have_field(:gender) }
  it { should have_field(:age) }
  it { should have_field(:password) }
  it { should have_field(:password_confirmation) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:surname) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:gender) }
  it { should validate_presence_of(:age) }
  it { should validate_presence_of(:password) }
  it { should validate_presence_of(:password_confirmation) }

  it { should be_valid }

  ##########################
  ## PRESENCE VALIDATIONS ##
  ##########################
  
  describe "when name is not present" do
    before { @user.name = " " }
    it { should_not be_valid }
  end

  describe "when surname is not present" do
    before { @user.surname = " " }
    it { should_not be_valid }
  end

  describe "when email is not present" do
    before { @user.email = " " }
    it { should_not be_valid }
  end

  describe "when gender is not present" do
    before { @user.gender = " " }
    it { should_not be_valid }
  end

  describe "when age is not present" do
    before { @user.age = " " }
    it { should_not be_valid }
  end

  describe "when password is not present" do
    before { @user.password = @user.password_confirmation = " " }
    it { should_not be_valid }
  end

  
  ########################
  ## LENGTH VALIDATIONS ##
  ########################
  
  describe "when name is too short" do
    before { @user.name = "a" * 2 }
    it { should_not be_valid }
  end

  describe "when name is too long" do
    before { @user.name = "a" * 21 }
    it { should_not be_valid }
  end

  describe "when surname is too short" do
    before { @user.surname = "a" * 2 }
    it { should_not be_valid }
  end

  describe "when surname is too long" do
    before { @user.surname = "a" * 21 }
    it { should_not be_valid }
  end

  describe "when password is too short" do
    before { @user.password = @user.password_confirmation = "a" * 7 }
    it { should_not be_valid }
  end
  
  ########################
  ## FORMAT VALIDATIONS ##
  ########################

  describe "when email format is invalid" do
    it "should be invalid" do
      emails = %w[  
                    user@example,com
                    user_at_exam.org
                    user.example@foo.
                    user@example.c
                    _user@example.com
                    r@example.com
                    user@e.com
                    user@exa_mple.com
                    user@exa+mple.com
                 ]
      emails.each do |invalid_email|
        @user.email = invalid_email
        @user.should_not be_valid
      end
    end
  end

  describe "when email format is valid" do
    it "should be valid" do
      emails = %w[
                    user@example.COM
                    U_SE-R@exam.ple.org
                    user.example@foo.co
                    us+er@example.co
                 ]
      emails.each do |valid_email|
        @user.email = valid_email
        @user.should be_valid
      end
    end
  end


  ################################
  ## ALLOWED VALUES VALIDATIONS ##
  ################################

  describe "when gender is an allowed value" do 
    it { should validate_inclusion_of(:gender).to_allow("male", "female") }
    it { should be_valid }
  end

  ##############################
  ## NUMERICALITY VALIDATIONS ##
  ##############################
  
  describe "when age is on the valid range" do
    it { should validate_numericality_of(:age).to_allow(only_integer: true, 
                                                        greater_than_or_equal_to: 18, 
                                                        less_than_or_equal_to: 120) }
    it { should be_valid }
  end

  describe "when age is under the range" do
    before { @user.age = 17 }
    it { should_not be_valid }
  end

  describe "when age is above the range" do
    before { @user.age = 121 }
    it { should_not be_valid }
  end

  describe "when age kind is integer" do
    it { have_field(:age).of_type(Integer) }
    it { should be_valid }
  end

  ##########################
  ## PASSWORD VALIDATIONS ##
  ##########################

  describe "when password and password confirmation do not match" do
    before { @user.password_confirmation = "mismatch" }
    it { should_not be_valid }
  end

  describe "when password confirmation is nil" do
    before { @user.password_confirmation = nil }
    it { should_not be_valid }
  end

end
