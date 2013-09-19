App.EventsNewRoute = App.AuthenticatedRoute.extend( {
  setupController: function(controller, model) {
    controller.reset();
  },

  events: {
    ownEventsRedirect: function() {
      this.controllerFor('events.own').set('nextFlagEventCreated', true);
      this.transitionTo('events.own');
    }
  }
});