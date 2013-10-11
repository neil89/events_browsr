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
  }.property('attendings'),

  actionAttending: function() {
    var userId = this.get('controllers.app.model.id');
    var flag = false;

    this.get('attendings').toArray().forEach(function(attU) {
      if (attU.get('id') == userId) {
        flag = true;
      }
    });

    if (flag) {
      alert("Ya asistes al evento");
    }
    else {
    
      this.transaction = this.get('store').transaction();

      //var currentEvent = App.Event.find(this.get('id'));
      //var currentAttendances = currentEvent.get('attendances');
      //currentAttendances.pushObject(App.User.find(userId));
      //currentEvent.get('attendances').pushObject(App.User.find(userId));
    //this.get('attendings').pushObject(App.User.find(userId));
      
      //currentEvent.set('attendances', currentAttendances);

    //this.transaction.add(this.get('model'));
    //this.transaction.commit();

      //this.get('store').commit();
      
      var eId = this.get('id');
      this.get('attendings').pushObject(App.User.find(userId));
      var eAttendings = this.get('attendings').toArray();
      
      var url = "/events/" + eId + ".json";

      var data = { event: { id: eId, attendings: eAttendings } };
      var self = this;

      //////////////////////////////////////
      // APARECE UN ERROR EXTRAÑO:        //
      // TypeError: fullName is undefined //
      // Línea 28289 de ember.js          //
      //////////////////////////////////////
      
      $.ajax({
        type: "PUT",
        url: url,
        data: data,
        dataType: "JSON"
      });
/*
      $.post('/sessions.json', data)
      .then(function(doneResponse) {    // HTTP status code 20x, success
        self.set('controllers.app.loggedIn', true);
        self.set('controllers.app.model', App.User.find(doneResponse.session.id));
        self.set('userId', doneResponse.session.id);
        self.set('loginError', null);
        self.send('goToHome');
      }, function(failResponse) {       // HTTP status code 40x or 50x, error
        self.set('controllers.app.loggedIn', false);
        self.set('userId', null);
        self.set('loginError', failResponse.responseJSON.errors.login);
        self.set('nextFlagInvalidAuthentication', true);
        self.reset();
      });
*/





   
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
