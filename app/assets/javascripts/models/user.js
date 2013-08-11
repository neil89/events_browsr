App.User = DS.Model.extend( {
  name: DS.attr('string'),
  surname: DS.attr('string'),
  email: DS.attr('string'),
  gender: DS.attr('string'),
  age: DS.attr('number'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),

  nameError: null,
  surnameError: null,
  emailError: null,
  genderError: null,
  ageError: null,
  passwordError: null,
  passwordConfirmationError: null,

  becameInvalid: function(errors) {
    this.nameErrorTranslation(errors.errors.name);
    this.surnameErrorTranslation(errors.errors.surname);
    this.emailErrorTranslation(errors.errors.email);
    this.genderErrorTranslation(errors.errors.gender);
    this.ageErrorTranslation(errors.errors.age);
    this.passwordErrorTranslation(errors.errors.password);
    this.passwordConfirmationErrorTranslation(errors.errors.password_confirmation);
  },

  nameErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "length") {
          err = "length_min_max";
        }
        
        arr.push(I18n.t("errors." + err, { field: "Nombre", min: 3, max: 20 }));
      });
      this.set('nameError', arr);
    }
  },

  surnameErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "length") {
          err = "length_min_max";
        }

        arr.push(I18n.t("errors." + err, { field: "Apellidos", min: 3, max: 20 }));
      });
      this.set('surnameError', arr);
    }
  },

  emailErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "invalid") {
          err = "invalid_email";
        }

        arr.push(I18n.t("errors." + err, { field: "Email" }));
      });
      this.set('emailError', arr);
    }
  },

  genderErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "invalid") {
          err = "invalid_gender";
        }

        arr.push(I18n.t("errors." + err, { field: "Sexo" }));
      });
      this.set('genderError', arr);
    }
  },

  ageErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "invalid") {
          err = "invalid_integer";
        }
        else if (err == "range") {
          err = "range_age";
        }

        arr.push(I18n.t("errors." + err, { field: "Edad", min: 18, max: 120 }));
      });
      this.set('ageError', arr);
    }
  },

  passwordErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "length") {
          err = "length_min";
        }

        arr.push(I18n.t("errors." + err, { field: "Contraseña", min: 8 }));
      });
      this.set('passwordError', arr);
    }
  },

  passwordConfirmationErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        if (err == "confirmation") {
          err = "confirmation_password";
        }

        arr.push(I18n.t("errors." + err, { field: "Confirmar contraseña" }));
      });
      this.set('passwordConfirmationError', arr);
    }
  }

});
