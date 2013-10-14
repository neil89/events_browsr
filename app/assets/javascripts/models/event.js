App.Adapter.map(
  'App.Event', {
    user: { embedded: 'load' },
    attendings: { embedded: 'load' }
});

App.Event = DS.Model.extend( {
  title: DS.attr('string'),
  date: DS.attr('string'),
  place: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user',
                     { inverse: 'events' },
                     { embedded: 'load' }),
  attendings: DS.hasMany('user',
                          { inverse: 'attendances' },
                          { embedded: 'load' }),

  titleError: function() {
    var errors = this.get('errors.title');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.title." + err, { min: 3 }));
      });
    }

    return arr;
  }.property('errors.title'),

  dateError: function() {
    var errors = this.get('errors.date');
    var arr = [];

    if (errors) {
      errors.forEach(function (err) {
        arr.push(I18n.t("errors.date." + err));
      });
    }

    return arr;
  }.property('errors.date'),

  placeError: function() {
    var errors = this.get('errors.place');
    var arr = [];

    if (errors) {
      if (this.get('place').length > 0) {   // Place attribute hasn't to be present
        errors.forEach(function (err) {
          arr.push(I18n.t("errors.place." + err, { min: 3 }));
        });
      }
    }

    return arr;
  }.property('errors.place'),

  descriptionError: function() {
    var errors = this.get('errors.description');
    var arr = [];

    if (errors) {
      if (this.get('place').length > 0) {   // Description attribute hasn't to be present
        errors.forEach(function (err) {
          arr.push(I18n.t("errors.description." + err, { min: 8 }));
        });
      }
    }

    return arr;
  }.property('errors.description')
});
