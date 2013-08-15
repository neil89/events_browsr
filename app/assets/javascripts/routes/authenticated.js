App.AuthenticatedRoute = Ember.Route.extend( {
  redirect: function() {
    var loggedIn = this.controllerFor('app').get('loggedIn');

    if (!loggedIn) {
      this.controllerFor('app.signin').set('nextFlagNotLoggedIn', true);
      this.controllerFor('app.signin').reset();
      this.transitionTo('app.signin');
    }
  }
});