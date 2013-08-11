App.AppSignupController = Ember.ObjectController.extend( {
  name: null,
  surname: null,
  email: null,
  gender: null,
  age: null,
  password: null,
  passwordConfirmation: null,

  createUser: function() {
    var uName =                 this.get('name');
    var uSurname =              this.get('surname');
    var uEmail =                this.get('email');
    var uGender =               this.get('gender');
    var uAge =                  this.get('age');
    var uPassword =             this.get('password');
    var uPasswordConfirmation = this.get('passwordConfirmation');

    console.log("CAPTURADO Nombre: " + uName +
      ", Apellidos: " + uSurname +
      ", Email: " + uEmail +
      ", Sexo: " + uGender +
      ", Edad: " + uAge +
      ", Contraseña: " + uPassword +
      ", Confirm. Contraseña: " + uPasswordConfirmation);


    this.transaction = this.get('store').transaction();

    var newUser = this.transaction.createRecord
    (
      App.User,
      {
        name: uName,
        surname: uSurname,
        email: uEmail,
        gender: uGender,
        age: uAge,
        password: uPassword,
        password_confirmation: uPasswordConfirmation
      }
    );

    this.set('model', newUser);

    this.transaction.commit();
    this.transaction = null;
  }
});