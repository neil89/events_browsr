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
        arr.push(I18n.t("errors.name." + err, { min: 3, max: 20 }));
      });
      this.set('nameError', arr);
    }
  },

  surnameErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.surname." + err, { min: 3, max: 20 }));
      });
      this.set('surnameError', arr);
    }
  },

  emailErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.email." + err));
      });
      this.set('emailError', arr);
    }
  },

  genderErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.gender." + err));
      });
      this.set('genderError', arr);
    }
  },

  ageErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.age." + err, { min: 18, max: 120 }));
      });
      this.set('ageError', arr);
    }
  },

  passwordErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.password." + err, { min: 8 }));
      });
      this.set('passwordError', arr);
    }
  },

  passwordConfirmationErrorTranslation: function(errors) {
    var arr = [];

    if (errors !== undefined) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.password_confirmation." + err));
      });
      this.set('passwordConfirmationError', arr);
    }
  }

});
