App.AppBoardController = Ember.ObjectController.extend( {
  needs: ['app'],

  flagLoggedIn: false,
  nextFlagLoggedIn: false,

  reset: function() {
    this.set('flagLoggedIn', this.get('nextFlagLoggedIn'));
    this.set('nextFlagLoggedIn', false);
  },

  loggedIn: function() {
    return this.get('controllers.app.loggedIn');
  }.property('controllers.app.loggedIn')
});