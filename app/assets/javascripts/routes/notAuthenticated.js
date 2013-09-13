App.NotAuthenticatedRoute = Ember.Route.extend( {
  redirect: function() {
    var loggedIn = this.controllerFor('app').get('loggedIn');

    if (loggedIn) {
      this.transitionTo('app.home');
    }
  }
});