class EventsController < ApplicationController
  self.responder = ActsAsApi::Responder
  respond_to :json

  # GET /events.json
  def index
    #@limit = params[:limit].to_i
    #@skipping = (params[:page].to_i - 1) * @limit

    #e = params[:user_id].blank? ? Event.all.order_by(:date.to_time) : Event.where(user_id: params[:user_id])
    #e = params[:user_id].blank? ? Event.all.skip(@skipping).limit(@limit) : Event.where(user_id: params[:user_id])
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

  # POST /events.json
  def create
    e = Event.new(params[:event])

    if e.save
      respond_with e, :api_template => :general_event, status: :created
    else
      respond_with e, :api_template => :general_event, status: :unprocessable_entity
    end
  end

  #PUT /events/1.json
  def update
    e = Event.find(params[:id])

    logger.debug "**"
    logger.debug "Event: #{e.to_s}"
    logger.debug "Event.id: #{e.id.to_s}"
    logger.debug "Event.attendings: #{params[:attendings]}"

    u = User.find(params[:attendings])

    if params[:attendings]
    logger.debug "Dentro del if"
    logger.debug "  u.name: #{u.name.to_s}"
      e.attendings << u
    logger.debug "  Event: #{e.attendings.first.id.to_s}"
    logger.debug "Se va a guardar!"
      e.save
    logger.debug "GUARDADO"
      respond_with e, api_template: :general_event, status: :no_content
    # else
    #   respond_with e, api_template: :general_event, root: :errors, status: :unprocessable_entity
    end
  end


end
