App.Session = DS.Model.extend( {
  email: DS.attr('string'),
  password: DS.attr('string'),
  login: DS.attr('string'),

  becameInvalid: function(errors) {
    alert("Invalid!");
  }
});