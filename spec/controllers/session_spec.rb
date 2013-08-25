require 'spec_helper'

describe SessionsController do
  describe "POST #create" do
    context "with valid attributes" do
      before(:each) do
        @user = FactoryGirl.create(:user)
        login_user
      end

      it "should return a 200 HTTP status" do
        response.code.should == "200"
      end
    end

    context "with invalid attributes" do
      before(:each) do
        @user = FactoryGirl.create(:user, 
                                   password: "invalid-password", 
                                   password_confirmation: "invalid-password")
        ## ¿Es esta una forma correcta de testear el login inválido?
        login_user
      end

      ####################################################################
      ## HAY QUE RESOLVER ANTES EL PROBLEMA DEL CÓDIGO DE RESPUESTA 401 ##
      ## EN EL MÉTODO DEL CONTROLADOR PARA PODER TESTEARLO              ##
      ####################################################################

      # it "should return a 401 HTTP status" do
      #   response.code.should == "401"
      # end
    end
  end
end