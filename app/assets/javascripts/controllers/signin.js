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
    .then(function(doneResponse) {    // HTTP status code 20x, success
      self.set('controllers.app.loggedIn', true);
      self.set('controllers.app.model', App.User.find(doneResponse.session.id));
      self.set('userId', doneResponse.session.id);
      self.set('loginError', null);
      self.send('goToHome');
    }, function(failResponse) {       // HTTP status code 40x or 50x, error
      self.set('controllers.app.loggedIn', false);
      self.set('userId', null);
      self.set('loginError', failResponse.responseJSON.errors.login);
      self.set('nextFlagInvalidAuthentication', true);
      self.reset();
    });
  }
});
