App.AppIndexRoute = Ember.Route.extend( {
  events: {
    goToSignUp: function() {
      this.transitionTo('app.signup');
    },

    goToSignIn: function() {
      this.transitionTo('app.signin');
    },
    error: function(reason, transition) {
      console.log("Evento error en appIndex");
    }
  }
});