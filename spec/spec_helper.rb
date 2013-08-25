ENV["RAILS_ENV"] ||= 'test'
# require 'simple_cov'
# SimpleCov.start
require File.expand_path("../../config/environment", __FILE__)
require 'rspec/rails'
require 'factory_girl'
require 'sorcery'

# Requires supporting ruby files with custom matchers and macros, etc,
# in spec/support/ and its subdirectories.
Dir[Rails.root.join("spec/support/**/*.rb")].each {|f| require f}

RSpec.configure do |config|
  config.mock_with :rspec

  config.before :each do
    Mongoid.purge!
  end
end

include Sorcery::TestHelpers::Rails

RSpec.configure do |config|
  config.include JsonSpec::Helpers
end