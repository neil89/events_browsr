class UsersController < ApplicationController

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

    if u.save!
      render json: u, status: :created
    else
      render json: u.errors, status: :unprocessable_entity
    end

    u.reload
  end  
end