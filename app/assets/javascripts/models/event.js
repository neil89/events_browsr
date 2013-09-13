App.Adapter.map(
  'App.Event', {
    user: { embedded: 'load' }
});

App.Event = DS.Model.extend( {
  title: DS.attr('string'),
  date: DS.attr('string'),
  place: DS.attr('string'),
  description: DS.attr('string'),
  age: DS.attr('number'),
  user: DS.belongsTo('App.User', { embedded: 'load' })
});
