// App.Adapter.map
// (
//   'App.Profile',
//   {
//     projects: {embedded: 'load'},
//     people: {embedded: 'load'}
//   }
// );

App.User = DS.Model.extend( {
  name: DS.attr('string'),
  surname: DS.attr('string'),
  email: DS.attr('string'),
  gender: DS.attr('string'),
  age: DS.attr('number'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string')
});