class EventsController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  # GET /events.json
  def index
    e = Event.all
    respond_with e, :api_template => :general_event, status: :ok
  end

  # GET /events/1.json
  def show
    e = Event.find(params[:id])

    if e
      respond_with e, :api_template => :general_event, status: :ok
    else
      respond_with nil, status: :not_found
    end
  end


end
