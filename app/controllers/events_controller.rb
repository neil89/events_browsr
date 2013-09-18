class EventsController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  # GET /events.json
  def index
    #e = params[:user_id].blank? ? Event.all.order_by(:date => "desc") : Event.where(user_id: params[:user_id])
    e = params[:user_id].blank? ? Event.all : Event.where(user_id: params[:user_id])

logger.debug "**"
logger.debug "  params[:user_id] -> #{params[:user_id]}" 

    respond_with e, :api_template => :general_event, status: :ok
  end

  # GET /events/1.json
  # def show
  #   e = Event.find(params[:id])

  #   if e
  #     respond_with e, :api_template => :general_event, status: :ok
  #   else
  #     respond_with nil, status: :not_found
  #   end
  # end

  def show
    e = Event.find(params[:id])
    #e = params[:id].blank? ? Event.find(params[:title])   : Event.find(params[:id])

    if e
      respond_with e, :api_template => :general_event, status: :ok
    else
      respond_with nil, status: :not_found
    end
  end

end
