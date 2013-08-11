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
    var arr = [];

    if (errors.errors.name !== undefined) {
      errors.errors.name.forEach(function (err) {
        if (err == "length") {
          err = "length_min_max";
        }
        
        arr.push(I18n.t("errors." + err, { field: "Nombre", min: 3, max: 20 }));
      });
      this.set('nameError', arr);
    }

    if (errors.errors.surname !== undefined) {
      arr = [];
      errors.errors.surname.forEach(function (err) {
        if (err == "length") {
          err = "length_min_max";
        }

        arr.push(I18n.t("errors." + err, { field: "Apellidos", min: 3, max: 20 }));
      });
      this.set('surnameError', arr);
    }

    if (errors.errors.email !== undefined) {
      arr = [];
      errors.errors.email.forEach(function (err) {
        if (err == "invalid") {
          err = "invalid_email";
        }

        arr.push(I18n.t("errors." + err, { field: "Email" }));
      });
      this.set('emailError', arr);
    }

    if (errors.errors.gender !== undefined) {
      arr = [];
      errors.errors.gender.forEach(function (err) {
        if (err == "invalid") {
          err = "invalid_gender";
        }

        arr.push(I18n.t("errors." + err, { field: "Sexo" }));
      });
      this.set('genderError', arr);
    }

    if (errors.errors.age !== undefined) {
      arr = [];
      errors.errors.age.forEach(function (err) {
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

    if (errors.errors.password !== undefined) {
      arr = [];
      errors.errors.password.forEach(function (err) {
        if (err == "length") {
          err = "length_min";
        }

        arr.push(I18n.t("errors." + err, { field: "Contraseña", min: 8 }));
      });
      this.set('passwordError', arr);
    }

    if (errors.errors.password_confirmation !== undefined) {
      arr = [];
      errors.errors.password_confirmation.forEach(function (err) {
        if (err == "confirmation") {
          err = "confirmation_password";
        }

        arr.push(I18n.t("errors." + err, { field: "Confirmar contraseña" }));
      });
      this.set('passwordConfirmationError', arr);
    }
  }

/*****************************************************************
** LOS ERRORES SE FACTORIZARÍAN COMO SIGUE. NO HA SIDO POSIBLE  **
** PORQUE AL HACER ESO NO SE DISPARAN LOS EVENTOS DE EMBER-DATA **
** DONDE SE MANEJAN LOS ERRORES Y POR TANTO NO SE RECIBEN AQUÍ  **
** PARA GUARDARLOS EN LAS CORRESPONDIENTES VARIABLES. AL        **
** ELIMINAR EL PROPERTY AL FINAL DE LA FUNCIÓN SI QUE SE        **
** DISPARAN TODOS LOS EVENTOS CON NORMALIDAD.                   **
*****************************************************************/

  // nameErrorTranslation: function() {
  //   var arr = [];

  //   if (errors.errors.name !== undefined) {
  //     errors.errors.name.forEach(function (err) {
  //       if (err == "length") {
  //         err = "length_min_max";
  //       }
        
  //       arr.push(I18n.t("errors." + err, { field: "Nombre", min: 3, max: 20 }));
  //     });
  //     this.set('nameError', arr);
  //   }
  // }.property('nameError')

});
