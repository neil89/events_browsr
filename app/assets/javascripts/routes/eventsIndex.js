App.EventsIndexRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    return App.Event.find();
  }
});