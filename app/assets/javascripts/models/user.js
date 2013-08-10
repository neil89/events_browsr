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
  },


  // nameErrorTranslation: function() {
  //    return I18n.t("hello") + this.get('nameError');
  // }.property('nameError')

/*
  nameError: function() {
    return this.get('errors.name');
  }.property('errors')
*/

  // becameError: function() {
  //   // handle error case here
  //   alert ('¡Ocurrio un error!');
  // },

  // becameInvalid: function(errors) {
  //   // record was invalid
  //   var text = "El registro fue invalido debido a: ";
  //   var i = 0;

  //   if (errors.errors.name !== undefined)
  //   {
  //     text += " NOMBRE ->";

  //     for (i=0; i<errors.errors.name.length; i++)
  //       text += " *" + errors.errors.name[i] + "*";
  //   }

  //   if (errors.errors.surname !== undefined)
  //   {
  //     text += " APELLIDOS ->";

  //     for (i=0; i<errors.errors.surname.length; i++)
  //       text += " *" + errors.errors.surname[i] + "*";
  //   }

  //   if (errors.errors.email !== undefined)
  //   {
  //     text += " EMAIL ->";

  //     for (i=0; i<errors.errors.email.length; i++)
  //       text += " *" + errors.errors.email[i] + "*";
  //   }

  //   if (errors.errors.gender !== undefined)
  //   {
  //     text += " SEXO ->";

  //     for (i=0; i<errors.errors.gender.length; i++)
  //       text += " *" + errors.errors.gender[i] + "*";
  //   }

  //   if (errors.errors.age !== undefined)
  //   {
  //     text += " EDAD ->";

  //     for (i=0; i<errors.errors.age.length; i++)
  //       text += " *" + errors.errors.age[i] + "*";
  //   }

  //   if (errors.errors.password !== undefined)
  //   {
  //     text += " CONTRASEÑA ->";

  //     for (i=0; i<errors.errors.password.length; i++)
  //       text += " *" + errors.errors.password[i] + "*";
  //   }

  //   if (errors.errors.password_confirmation !== undefined)
  //   {
  //     text += " CONFIRM. CONTRASEÑA ->";

  //     for (i=0; i<errors.errors.password_confirmation.length; i++)
  //       text += " *" + errors.errors.password_confirmation[i] + "*";
  //   }

  //   alert (text);
  // }
});

/*
DS.Adapter.create( {
  createRecord: function(store, type, model) {
    var url = type.url;

    jQuery.ajax( {
      url: url.fmt(model.get('id')),
      data: model.get('data'),
      dataType: 'json',
      type: 'POST',

      success: function(data) {
          // data is a hash of key/value pairs representing the record.
          // In general, this hash will contain a new id, which the
          // store will now use to index the record. Future calls to
          // store.find(type, id) will find this record.
          store.didCreateRecord(model, data);
      }
    });
  }
});
*/