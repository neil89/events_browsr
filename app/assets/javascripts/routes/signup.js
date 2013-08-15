App.AppSignupRoute = Ember.Route.extend( {
  setupController: function(controller, model) {
    controller.reset();
  },

  events: {
    signedUpRedirect: function() {
      this.controllerFor('app.signin').set('nextFlagSignedUp', true);
      this.transitionTo('app.signin');
    }
  }
});