App.AppSigninController = Ember.ObjectController.extend( {
  needs: ['app'],

  email: null,
  password: null,

  flagSignedUp: false,
  nextFlagSignedUp: false,

  flagNotLoggedIn: false,
  nextFlagNotLoggedIn: false,

  flagInvalidAuthentication: false,
  nextFlagInvalidAuthentication: false,

  userId: null,
  loginError: null,

  reset: function() {
    this.set('email', "");
    this.set('password', "");

    this.set('loginError', null);

    this.set('flagSignedUp', this.get('nextFlagSignedUp'));
    this.set('nextFlagSignedUp', false);

    this.set('flagNotLoggedIn', this.get('nextFlagNotLoggedIn'));
    this.set('nextFlagNotLoggedIn', false);

    this.set('flagInvalidAuthentication', this.get('nextFlagInvalidAuthentication'));
    this.set('nextFlagInvalidAuthentication', false);
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
        self.set('controllers.app.loggedIn', false);
        self.set('userId', null);
        self.set('loginError', response.errors.login);
        self.set('nextFlagInvalidAuthentication', true);
        self.reset();
        alert("Errores: " + response.errors.login);
      }
      else {
        self.set('controllers.app.loggedIn', true);
        self.set('controllers.app.model', App.User.find(response.session.id));
        self.set('userId', response.session.id);
        self.set('loginError', null);
        self.send('goToHome');
        alert("Correcto - id = *" + response.session.id + "*");
      }
    });
  }
});
