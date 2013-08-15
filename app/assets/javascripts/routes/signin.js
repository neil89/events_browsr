App.AppSigninRoute = Ember.Route.extend( {
  setupController: function(controller, model) {
    controller.reset();
  },

  events: {
    goToBoard: function() {
      this.controllerFor('app.board').set('nextFlagLoggedIn', true);
      this.transitionTo('app.board');
    }
  }
});