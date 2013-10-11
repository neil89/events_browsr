App.Adapter.map(
  'App.User', {
    events: { embedded: 'load' },
    attendances: { embedded: 'load' }
});

App.User = DS.Model.extend( {
  name: DS.attr('string'),
  surname: DS.attr('string'),
  email: DS.attr('string'),
  gender: DS.attr('string'),
  age: DS.attr('number'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  events: DS.hasMany('App.Event',
                     { inverse: 'user' },
                     { embedded: 'load' }),
  attendances: DS.hasMany('App.Event',
                          { inverse: 'attendings' },
                          { embedded: 'load' }),

  fullName: function() {
    return this.get('name') + " " + this.get('surname');
  }.property('name', 'surname'),


  nameError: function() {
    var errors = this.get('errors.name');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.name." + err, { min: 3, max: 20 }));
      });
    }

    return arr;
  }.property('errors.name'),


  surnameError: function() {
    var errors = this.get('errors.surname');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.surname." + err, { min: 3, max: 20 }));
      });
    }

    return arr;
  }.property('errors.surname'),

  emailError: function() {
    var errors = this.get('errors.email');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.email." + err));
      });
    }

    return arr;
  }.property('errors.email'),

  genderError: function() {
    var errors = this.get('errors.gender');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.gender." + err));
      });
    }

    return arr;
  }.property('errors.gender'),

  ageError: function() {
    var errors = this.get('errors.age');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.age." + err, { min: 18, max: 120 }));
      });
    }

    return arr;
  }.property('errors.age'),

  passwordError: function() {
    var errors = this.get('errors.password');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
console.log("Error de password: -" + err + "-");
        arr.push(I18n.t("errors.password." + err, { min: 8 }));
      });
    }

    return arr;
  }.property('errors.password'),

  passwordConfirmationError: function() {
    var errors = this.get('errors.password_confirmation');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.password_confirmation." + err));
      });
    }

    return arr;
  }.property('errors.password_confirmation')

});
