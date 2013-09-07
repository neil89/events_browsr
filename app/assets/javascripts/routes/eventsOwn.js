App.EventsOwnRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    var multiModel = Ember.Object.create(
      {
        myEvents: App.Event.find({title: "Barbacoa"}),
        notMyEvents: App.Event.find({title: "Evento 1"})
      });
    return multiModel;
  }
});

  
