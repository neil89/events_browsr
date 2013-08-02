App.AppIndexController = Ember.ObjectController.extend( {
  signInAction: function() {
    this.send('goToSignIn');
  },

  signUpAction: function() {
    this.send('goToSignUp');
  }
})