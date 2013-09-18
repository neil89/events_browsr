App.EventController = Ember.ObjectController.extend( {
  needs: ['app'],

  isOwner: function() {
    var userId = this.get('controllers.app.model.id');
    var flag = false;

    if (userId == this.get('user.id'))
      flag = true;

    return flag;
  }.property('user_id', 'controllers.app.model'),

  attendingUsers: function() {
    return this.get('attendings').toArray().length;
  }.property('attendances'),

  actionAttending: function() {
    var userId = this.get('controllers.app.model.id');
    var flag = false;

    this.get('attendances').toArray().forEach(function(attU) {
      if (attU.get('id') == userId) {
        flag = true;
      }
    });

    if (flag) {
      alert("Ya asistes al evento");
    }
    else {
          
      //var currentEvent = App.Event.find(this.get('id'));
      //var currentAttendances = currentEvent.get('attendances');
      //currentAttendances.pushObject(App.User.find(userId));
      //currentEvent.get('attendances').pushObject(App.User.find(userId));
      this.get('attendances').pushObject(App.User.find(userId));
      
      //currentEvent.set('attendances', currentAttendances);

      this.get('store').commit();
    
   
    /*
    this.transaction = this.get('store').transaction();

    var attendances = this.get('attendances').pushObject(App.User.find(userId));
    this.set('title', "Escapada a la montaña");

    this.transaction.add(this.get('model'));

    this.transaction.commit();
    this.transaction = null;
    */
    }
  }
});
