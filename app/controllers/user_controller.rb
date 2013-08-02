class UserController < ApplicationController

  # GET /user.json
  def index
    render json: User.all
  end

  # GET /user/1.json
  def show
    p = User.find(params[:id])
    render json: p
  end

  # POST /user.json
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