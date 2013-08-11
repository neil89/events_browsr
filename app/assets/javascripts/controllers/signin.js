App.AppSigninController = Ember.ObjectController.extend( {
  email: null,
  password: null,

  login: function() {
    var uEmail =                this.get('email');
    var uPassword =             this.get('password');

    console.log("CAPTURADO Email: " + uEmail +
      ", Contraseña: " + uPassword);
  }
});