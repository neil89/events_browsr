App.AppSigninController = Ember.ObjectController.extend( {
  email: null,
  password: null,

  userId: null,
  loginError: null,

  reset: function() {
    this.set('email', "");
    this.set('password', "");
  },

  login: function() {
    var uEmail =                this.get('email');
    var uPassword =             this.get('password');

    console.log("CAPTURADO Email: " + uEmail +
      ", Contraseña: " + uPassword);

    var data = { session: { email: uEmail, password: uPassword } };
    var self = this;

    $.post('/sessions.json', data)
    .then(function(response) {
      if (response.errors) {
        self.set('userId', null);
        self.set('loginError', response.errors.login);
        alert("Errores: " + response.errors.login);
      }
      else {
        self.set('userId', response.session.id);
        alert("Correcto - id = *" + response.session.id + "*");
      }
    });
  }
});
