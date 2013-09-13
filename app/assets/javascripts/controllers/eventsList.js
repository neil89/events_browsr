App.AppEventsListController = Ember.ArrayController.extend( {
  needs: ['app'],

  itemController: 'event',

  sortFunction: function(x, y) {
    if (x == y)
      return 0;

    var dateX = x.substring(6) + x.substring(3, 5) + x.substring(0, 2);
    var dateY = y.substring(6) + y.substring(3, 5) + y.substring(0, 2);

    return dateX < dateY ? -1 : 1;
  },
  sortProperties: ['date'],
  sortAscending: true,

  setCurrentEvent: function(e) {
    this.set('currentEvent', e);
    $("#more-info-event").modal("show");
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
    var self = this;

    events.toArray().forEach(function(ev) {
      var date = ev.get('date');
      var evDate = new Date(date.substring(6),
                            parseInt(date.substring(3, 5), 10) - 1,
                            date.substring(0, 2));

      var days = Math.round((today - evDate) / 1000 / 60 / 60 / 24);

      if (days === 0) {
        todayEvents.push(ev);
      }
      else {
        var arr = self.get('comingEvents');
        arr.push(ev);
        self.set('comingEvents', arr);
      }

    });

    return todayEvents;
  }.property('model'),

  comingEvents: [],

  currentEvent: undefined
});