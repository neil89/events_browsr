require 'spec_helper'

describe UsersController do
  describe "POST #create" do
    context "with valid attributes" do
      before(:each) do
        post :create, :user => { 
                        :name => "Foo", 
                        :surname => "Bar" ,
                        :email => "foo@bar.org",
                        :gender => "male",
                        :age => 25,
                        :password => "foobarfoobar",
                        :password_confirmation => "foobarfoobar"
                               }, 
                      :api_template => :general_user, 
                      :format => 'json'
      end

      it "should return a 201 HTTP status" do
        response.code.should == "201"
      end

    end

    context "with invalid attributes" do
      before(:each) do
        post :create, :user => {}, :api_template => :unprocessable_user, :format => 'json'
      end

      it "should return a 422 HTTP status" do
        response.code.should == "422"
      end

      it "should return errros as JSON"
    end
  end
end
