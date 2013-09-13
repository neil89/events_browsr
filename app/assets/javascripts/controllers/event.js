App.EventController = Ember.ObjectController.extend( {
  needs: ['app'],

  isOwner: function() {
    var userId = this.get('controllers.app.model.id');
    var flag = false;

    if (userId == this.get('user.id'))
      flag = true;

    return flag;
  }.property('user_id', 'controllers.app.model')
});
