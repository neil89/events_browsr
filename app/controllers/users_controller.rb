class UsersController < ApplicationController
  respond_to :json

  # GET /users.json
  def index
    render json: User.all
  end

  # GET /users/1.json
  def show
    p = User.find(params[:id])
    render json: p
  end

  # POST /users.json
  def create
    u = User.new(params[:user])

    if u.save
       render json: u, status: :created
    else
      # Standard render with no errors handling
      #render json: u.errors, status: :unprocessable_entity
      #
      # First aproach to errors handling - doesn't change anything
      #render json: u.errors.messages.to_json, status: :unprocessable_entity
      
      # respond_to do |format|
      #   format.json { render_for_api :unprocessable_user, 
      #     :json => u, 
      #     status: :unprocessable_entity }
      # end

      respond_with u.errors.messages, :api_template => :unprocessable_user, :location => nil

    end

    #u.reload
  end  
end