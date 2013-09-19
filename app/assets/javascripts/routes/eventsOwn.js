App.EventsOwnRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    var userId = this.controllerFor('app').get('model.id');

    return App.Event.find({user_id: userId});
  },

  setupController: function(controller, model) {
    controller.reset();
    controller.set('model', model);
  }
});

  
