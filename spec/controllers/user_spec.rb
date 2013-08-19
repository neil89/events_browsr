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

      it "should return errors as JSON" do
        json = response.body

        parse_json(json, "errors/name").should include "blank"
        parse_json(json, "errors/name").should include "length"

        parse_json(json, "errors/surname").should include "blank"
        parse_json(json, "errors/surname").should include "length"

        parse_json(json, "errors/email").should include "blank"
        parse_json(json, "errors/email").should include "invalid"

        parse_json(json, "errors/gender").should include "blank"
        parse_json(json, "errors/gender").should include "invalid"

        parse_json(json, "errors/age").should include "blank"
        parse_json(json, "errors/age").should include "range"

        parse_json(json, "errors/password").should include "blank"
        parse_json(json, "errors/password").should include "length"

        parse_json(json, "errors/password_confirmation").should include "blank"
      end
    end
  end

  describe "GET #show" do

    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    it "should return the requested user" do
      get :show, id: @user 
    end

    it "should return a 200 HTTP status" do
      get :show, id: @user 
      response.code.should == "200"
    end
  end
end
