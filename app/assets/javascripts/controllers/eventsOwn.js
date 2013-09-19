App.EventsOwnController = App.AppEventsListController.extend( {

  flagEventCreated: false,
  nextFlagEventCreated: false,

  reset: function() {
    this.set('flagEventCreated', this.get('nextFlagEventCreated'));
    this.set('nextFlagEventCreated', false);
  },
});