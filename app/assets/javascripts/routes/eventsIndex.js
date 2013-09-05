App.EventsIndexRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    return App.Event.find({date: "04/09/2013"});
  }
});