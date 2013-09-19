App.EventsNewRoute = Ember.Route.extend( {//App.AuthenticatedRoute.extend( {
  setupController: function(controller, model) {
    controller.createDaysArray();
  }
});