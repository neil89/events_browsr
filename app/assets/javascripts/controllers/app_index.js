App.AppIndexController = Ember.ObjectController.extend( {
  registeredUsers: function() {
    return this.get('model.length');
  }.property('model.length'),

  signInAction: function() {
    this.send('goToSignIn');
  },

  signUpAction: function() {
    this.send('goToSignUp');
  }
});