App.AppIndexController = Ember.ObjectController.extend( {
  registeredUsers: function() {
    var n = this.get('model').toArray().length;

    return n;
  }.property('model'),

  signInAction: function() {
    this.send('goToSignIn');
  },

  signUpAction: function() {
    this.send('goToSignUp');
  }
});