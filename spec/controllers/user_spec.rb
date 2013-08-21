require 'spec_helper'

describe UsersController do
  describe "GET #show" do

    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    context "when user is found" do
      it "should return the requested user" do
        get :show, id: @user, :api_template => :general_user, :format => 'json'
        #assigns(:user).should == @user
      end

      it "should return a 200 HTTP status" do
        get :show, id: @user, :api_template => :general_user, :format => 'json'
        response.code.should == "200"
      end
    end

    context "when user is not found" do
      it "should return nil" do
        get :show, id: "0", :format => 'json'
        assigns(:user).should == nil
      end

      it "should return a 404 HTTP status" do
        get :show, id: "0", :format => 'json'
        response.code.should == "404"
      end
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      before(:each) do
        post :create, user: FactoryGirl.attributes_for(:user),
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

        parse_json(json, "errors/name").should include("blank", "length")

        parse_json(json, "errors/surname").should include("blank", "length")

        parse_json(json, "errors/email").should include("blank", "invalid")

        parse_json(json, "errors/gender").should include("blank", "invalid")

        parse_json(json, "errors/age").should include("blank", "range")

        parse_json(json, "errors/password").should include("blank", "length")

        parse_json(json, "errors/password_confirmation").should include "blank"
      end
    end
  end

  describe "PUT #update" do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    context "with valid attributes" do
      it "should find the requested user" do
        put :update, id: @user, 
                     user: FactoryGirl.attributes_for(:user), 
                     :api_template => :general_user, 
                     :format => 'json'
        #assigns(:user).should == @user
      end

      it "should change user's attributes" do
        put :update, id: @user,
                     user: FactoryGirl.attributes_for(:user, 
                                                      name: "Example",
                                                      surname: "User"),
                     :api_template => :general_user, 
                     :format => 'json'
        @user.reload
        @user.name.should eq("Example")
        @user.surname.should eq("User")
      end

      it "should return a 204 HTTP status" do
        put :update, id: @user, 
                     user: FactoryGirl.attributes_for(:user),
                     :api_template => :general_user, 
                     :format => 'json'
        response.code.should == "204"
      end
    end

    context "with invalid attributes" do
      it "should find the requested user" do
        put :update, id: @user, 
                     user: FactoryGirl.attributes_for(:invalid_user),
                     :api_template => :general_user, 
                     :format => 'json'
        #assigns(:user).should eq(@user)
      end

      it "should not change user's attributes" do
        put :update, id: @user,
                     user: FactoryGirl.attributes_for(:user,
                                                      name: "Example",
                                                      surname: nil),
                     :api_template => :general_user, 
                     :format => 'json'
        @user.reload
        @user.name.should_not eq("Example")
        @user.surname.should eq("Bar")
      end

      it "should return a 422 HTTP status" do
        put :update, id: @user, 
                     user: FactoryGirl.attributes_for(:invalid_user),
                     :api_template => :general_user, 
                     :format => 'json'
        response.code.should == "422"
      end
    end
  end


  #   context "invalid attributes" do 
  #     it "locates the requested @contact" do 
  #       put :update, id: @contact, contact: Factory.attributes_for(:invalid_contact) 
  #       assigns(:contact).should eq(@contact) 
  #     end 

  #     it "does not change @contact's attributes" do 
  #       put :update, id: @contact, contact: Factory.attributes_for(:contact, firstname: "Larry", lastname: nil) 
  #       @contact.reload 
  #       @contact.firstname.should_not eq("Larry") 
  #       @contact.lastname.should eq("Smith") 
  #     end 

  #     it "re-renders the edit method" do 
  #       put :update, id: @contact, contact: Factory.attributes_for(:invalid_contact) 
  #       response.should render_template :edit 
  #     end 
  #   end
  # end




end
