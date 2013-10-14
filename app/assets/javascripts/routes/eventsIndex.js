App.EventsIndexRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    return this.store.find('event');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.setupPagination();
  }
});