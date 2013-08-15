App.LoggedInCheckMixin = Ember.Mixin.create( {
  needs: ['app'],

  redirect: function() {
    var loggedIn = this.get('controllers.app.loggedIn');

    if (!loggedIn) {
      this.set('controllers.app.signin.nextFlagNotLoggedIn', true);
      alert("Transition!");
      //this.transitionTo('app.signin');
    }
  }
});