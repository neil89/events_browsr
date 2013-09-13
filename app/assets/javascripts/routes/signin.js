App.AppSigninRoute = App.NotAuthenticatedRoute.extend( {
  setupController: function(controller, model) {
    controller.reset();
  },

  events: {
    goToHome: function() {
      this.controllerFor('app.home').set('nextFlagLoggedIn', true);
      this.transitionTo('app.home');
    }
  }
});