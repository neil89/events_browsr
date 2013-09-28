App.PaginationBox = Ember.View.extend( {
  tagName: "li",

  didInsertElement: function() {
    this.get('controller').send('updateClasses');
  }
});