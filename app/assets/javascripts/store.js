App.Adapter = DS.RESTAdapter.extend( {
  bulkCommit: false
});

App.Store = DS.Store.extend( {
  revision: 13,
  adapter:  App.Adapter.create()
});
