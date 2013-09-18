class UsersController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  # GET /users.json
  def index
    u = User.all

    respond_with u, :api_template => :user_id, status: :ok
  end

  # GET /users/1.json
  def show
    u = User.find(params[:id])

    if u
      respond_with u, :api_template => :general_user_with_events, status: :ok
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

    profile_user = login(u.email, params[:user][:password])

    if u == profile_user  # params[:user][:password] is a valid password, so the update is performed
      logger.debug "**"
      logger.debug "  OK >> El usuario profile es el mismo que u"
      if u.update_attributes(params[:user])
        respond_with u, api_template: :general_user, status: :no_content
      else
        logger.debug "**"
        logger.debug "**"
        logger.debug "Errores: #{u.to_s}"
        logger.debug "**"
        logger.debug "Errores: #{u.errors.messages.to_json}"
        logger.debug "**"
        respond_with u, api_template: :unprocessable_user, root: :errors, status: :unprocessable_entity
      end
    else
      u.errors.add(:password, "wrong");
      respond_with u, api_template: :unprocessable_user, root: :errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1.json
  # def destroy
  #   u = User.find(params[:id])
  #   u.destroy
  #   render json: nil, status: :ok
  # end 
end
