App.EventModalView = Ember.View.extend( {
  title: function() {
    this.get('model.title');
  }
});