App.AppSigninController = Ember.ObjectController.extend( {
  email: null,
  password: null,

  reset: function() {
    this.set('email', "");
    this.set('password', "");
  },

  login: function() {
    var uEmail =                this.get('email');
    var uPassword =             this.get('password');

    console.log("CAPTURADO Email: " + uEmail +
      ", Contraseña: " + uPassword);
  }
});