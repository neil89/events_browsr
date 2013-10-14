App.AppSignupController = Ember.ObjectController.extend( {
  name: null,
  surname: null,
  email: null,
  gender: null,
  age: null,
  password: null,
  passwordConfirmation: null,

  reset: function() {
    this.set('name', "");
    this.set('surname', "");
    this.set('email', "");
    this.set('gender', "");
    this.set('age', "");
    this.set('password', "");
    this.set('passwordConfirmation', "");

    // this.transaction = this.get('store').transaction();

    // var dummyUser = this.transaction.createRecord
    // (
    //   App.User
    // );

    // this.set('model', dummyUser);
    
    var emptyUser = {
      name: this.get('name'),
      surname: this.get('surname'),
      email: this.get('email'),
      gender: this.get('gender'),
      age: this.get('age'),
      password: this.get('password'),
      passwordConfirmation: this.get('passwordConfirmation')
    };

    this.set('model', emptyUser);

    this.set('model.nameError', null);
    this.set('model.surnameError', null);
    this.set('model.emailError', null);
    this.set('model.genderError', null);
    this.set('model.ageError', null);
    this.set('model.passwordError', null);
    this.set('model.passwordConfirmationError', null);
  },

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


    var newUser =  {
      name: uName,
      surname: uSurname,
      email: uEmail,
      gender: uGender,
      age: uAge,
      password: uPassword,
      password_confirmation: uPasswordConfirmation
    };

    var self = this;

    var createUser = this.store.createRecord('user', newUser);
    //createUser.save();
    
    createUser.save().then(function() {
      self.send('signedUpRedirect');
    });

    //this.set('createUser', '');






    /////////////////
    // OLD VERSION //
    /////////////////
    // this.transaction = this.get('store').transaction();

    // var newUser = this.transaction.createRecord
    // (
    //   App.User,
    //   {
    //     name: uName,
    //     surname: uSurname,
    //     email: uEmail,
    //     gender: uGender,
    //     age: uAge,
    //     password: uPassword,
    //     password_confirmation: uPasswordConfirmation
    //   }
    // );

    // this.set('model', newUser);

    // var self = this;

    // newUser.one('didCreate', function() {
    //   Ember.run.next(function() {
    //     self.send('signedUpRedirect');
    //   });
    // });

    // this.transaction.commit();
    // this.transaction = null;
  },
});