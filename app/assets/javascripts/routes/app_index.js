App.AppIndexRoute = Ember.Route.extend( {
  model: function() {
    return this.store.find('user');
  },

  events: {
    goToSignUp: function() {
      this.transitionTo('app.signup');
    },

    goToSignIn: function() {
      this.transitionTo('app.signin');
    }
  },

  redirect: function() {
    var loggedIn = this.controllerFor('app').get('loggedIn');

    if (loggedIn) {
      this.transitionTo('app.home');
    }
  }
});