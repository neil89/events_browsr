source 'https://rubygems.org'

gem 'rails', '3.2.9'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails'
  gem 'strong_parameters'
  gem 'uglifier'
  gem 'bootstrap-sass'
  gem 'bootstrap-glyphicons'
end

gem 'active_model_serializers', github: 'rails-api/active_model_serializers'
gem 'jquery-rails'
gem 'ember-rails', github: 'emberjs/ember-rails'
gem 'handlebars-source', '1.0.0.rc4'

gem 'mongoid', '~> 3.1.4'
gem 'bson_ext', '~> 1.9.1'

gem 'acts_as_api'

group :development do
  gem 'annotate'
  gem 'guard-rspec'
  gem 'guard-spork'
  gem 'spork'
end

group :sessions do
  gem 'sorcery'
end

group :test do
  gem 'mongoid-rspec'
  gem 'rspec-rails'
  gem 'cucumber-rails', :require => false
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'simple_cov'
  gem 'simple_cov-html'
end