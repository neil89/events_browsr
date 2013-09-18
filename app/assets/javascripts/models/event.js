App.Adapter.map(
  'App.Event', {
    user: { embedded: 'load' },
    attendings: { embedded: 'load' }
});

App.Event = DS.Model.extend( {
  title: DS.attr('string'),
  date: DS.attr('string'),
  place: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('App.User',
                     { inverse: 'events' },
                     { embedded: 'load' }),
  attendings: DS.hasMany('App.Attender',
                          { inverse: 'attendingTo' },
                          { embedded: 'load' })
});
