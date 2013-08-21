class UsersController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  # GET /users/1.json
  def show
    u = User.find(params[:id])

    if u
      respond_with u, :api_template => :general_user, status: :ok
    else
      respond_with nil, status: :not_found
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

  # PUT /users/1.json
  def update
    u = User.find(params[:id])

    if u.update_attributes(params[:user])
      respond_with u, :api_template => :general_user, status: :no_content
    else
      respond_with u, status: :not_found
    end
  end

  # DELETE /users/1.json
  # def destroy
  #   u = User.find(params[:id])
  #   u.destroy
  #   render json: nil, status: :ok
  # end 
end