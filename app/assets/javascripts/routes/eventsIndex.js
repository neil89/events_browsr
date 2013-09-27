App.EventsIndexRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    return App.Event.find();
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.setupPagination();
  }
});