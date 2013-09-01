App.EventsOwnController = Ember.ArrayController.extend( {
  needs: ['app'],

  ownEvents: function() {
    var embeddedEvents = this.get('controllers.app.model.events');
    var allEvents = this.get('model');
    var userEvents = [];

    var allElem;
    var flag = false;

    allEvents.toArray().forEach(function(allEl) {
      allElem = allEl;
      flag = false;

      embeddedEvents.toArray().forEach(function(embEl) {
        if (allElem.get('id') == embEl.get('id') && !flag) {
          userEvents.push(allElem);
          flag = true;
        }
      });
    });

    return userEvents;
  }.property('controllers.app.model')

});