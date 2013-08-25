class SessionsController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  def create
    u = login(params[:session][:email], params[:session][:password])

    if u
      respond_with u, api_template: :user_id, status: :ok, root: :session
    else
      u = User.new();
      u.id = nil;
      respond_with u, api_template: :login_failed,
                      ###############################################
                      ## SI UTILIZO ALGÚN CÓDIGO HTTP DEL TIPO 4xx ##
                      ## EL JSON DEVUELTO (parámetro 'respose') NO ##
                      ## SE TIENE EN CUENTA EN LA FUNCIÓN post     ##
                      ###############################################
                      #status: :unauthorized,
                      root: :errors
    end
  end

  # def destroy
  #   logout
  # end
   
end