App.EventsIndexController = Ember.ArrayController.extend( {
  needs: ['app'],

  itemController: 'event',

  sortProperties: ['date'],
  sortAscending: true,

  setCurrentEvent: function(e) {
    this.set('currentEvent', e);
  },

  getTodayEvents: function() {
    var events = this.get('model');
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    var flag = false;
    var todayEvents = [];

    events.toArray().forEach(function(ev) {
      var date = ev.get('date');
      var evDate = new Date(date.substring(6),
                            parseInt(date.substring(3, 5), 10) - 1,
                            date.substring(0, 2));

      var days = Math.round((today - evDate) / 1000 / 60 / 60 / 24);

      if (days === 0) {
        todayEvents.push(ev);
      }
    });

    return todayEvents;
  }.property('model'),

  owner: function() {
    var userId = this.get('controllers.app.model.id');
    var flag = false;

    if (userId == this.get('currentEvent.user.id'))
      flag = true;

    return flag;
  }.property('model'),

  currentEvent: undefined
});
