App.AuthenticatedRoute = Ember.Route.extend( {
  redirect: function() {
    var loggedIn = this.controllerFor('app').get('loggedIn');

    if (!loggedIn) {
      this.controllerFor('app.signin').set('flagNotLoggedIn', true);
      this.transitionTo('app.signin');
    }
  }
});