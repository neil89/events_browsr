require 'spec_helper'

describe EventsController do

  before(:each) do
    @event = FactoryGirl.create(:event)
  end

  describe "GET #index" do
    it "should return an array of events" do
      get :index, :api_template => :general_event, :format => 'json'
    end

    it "should return a 200 HTTP status" do
      get :index, :api_template => :general_event, :format => 'json'
      response.code.should == "200"
    end
  end

  describe "GET #show" do
    context "when event is found" do
      it "should return the requested event" do
        get :show, id: @event, :api_template => :general_event, :format => 'json'
      end

      it "should return a 200 HTTP status" do
        get :show, id: @event, :api_template => :general_event, :format => 'json'
        response.code.should == "200"
      end
    end

    context "when event is not found" do
      it "should reeturn nil" do
        get :show, id: "0", :format => 'json'
        assigns(:event).should == nil
      end

      it "should return a 404 HTTP status" do
        get :show, id: "0", :format => 'json'
        response.code.should == "404"
      end
    end
  end

  describe "POST #create" do
    context "with valid attributes" do
      it "should return a 201 HTTP status"
    end

    context "with invalid attributes" do
      it "should return a 422 HTTP status"
      
      it "should return errors as JSON"
    end
  end

end