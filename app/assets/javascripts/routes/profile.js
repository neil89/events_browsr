App.AppProfileRoute = App.AuthenticatedRoute.extend( {
  model: function() {
    return this.controllerFor('app').get('model');
  }
});
