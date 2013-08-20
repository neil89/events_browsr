class UsersController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  # GET /users/1.json
  def show
    p = User.find(params[:id])
    
    if p
      render json: p, status: :ok
    else
      render json: p, status: :not_found
    end
  end

  # POST /users.json
  def create
    u = User.new(params[:user])

    if u.save
      respond_with u, :api_template => :general_user, status: :created
    else
      respond_with u, :api_template => :unprocessable_user, status: :unprocessable_entity
    end
  end  
end