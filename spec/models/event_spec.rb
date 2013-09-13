require 'spec_helper'

describe Event do

  before do
    @event = Event.new(
                      title:        "Title",
                      date:         "28/08/2013",
                      place:        "Cordoba",
                      description:  "It is the last Wednesday of August")
  end

  subject { @event }

  it { should have_field(:title) }
  it { should have_field(:date) }
  it { should have_field(:place) }
  it { should have_field(:description) }

  it { should validate_presence_of(:title) }
  it { should validate_presence_of(:date) }

  it { should be_valid }

  ##########################
  ## PRESENCE VALIDATIONS ##
  ##########################
  
  describe "when title is not present" do
    before { @event.title = " " }
    it { should_not be_valid }
  end

  describe "when date is not present" do
    before { @event.date = " " }
    it { should_not be_valid }
  end

  ########################
  ## LENGTH VALIDATIONS ##
  ########################
  
  describe "when title is too short" do
    before { @event.title = "a" * 2 }
    it { should_not be_valid }
  end

  describe "when place is too short" do
    before { @event.place = "a" * 2 }
    it { should_not be_valid }
  end

  describe "when description is too short" do
    before { @event.description = "a" * 2 }
    it { should_not be_valid }
  end

  ########################
  ## FORMAT VALIDATIONS ##
  ########################

  describe "when date format is invalid" do
    it "should be invalid" do
      dates = %w[  
                    8/2/2013
                    08/2/2013
                    8/02/2013
                    08/02/13
                 ]
      dates.each do |invalid_date|
        @event.date = invalid_date
        @event.should_not be_valid
      end
    end
  end

  describe "when date format is valid" do
    it "should be valid" do
      dates = %w[
                    08/02/2013
                 ]
      dates.each do |valid_date|
        @event.date = valid_date
        @event.should be_valid
      end
    end
  end
end