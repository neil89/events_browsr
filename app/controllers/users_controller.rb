class UsersController < ApplicationController
  self.responder = ActsAsApi::Responder
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
      respond_with u, status: :created
    else
      respond_with u, :api_template => :unprocessable_user, 
                                      status: :unprocessable_entity
    end
  end  
end