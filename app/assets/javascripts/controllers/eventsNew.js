App.EventsNewController = Ember.ObjectController.extend( {
  needs: ['app'],

  title: null,
  curDay: null,
  curMonth: null,
  curYear: null,
  place: null,
  description: null,

  days: [],

  months: [
    {month: "Enero",      days: 31, id: 0},
    {month: "Febrero",    days: 28, id: 1},
    {month: "Marzo",      days: 31, id: 2},
    {month: "Abril",      days: 30, id: 3},
    {month: "Mayo",       days: 31, id: 4},
    {month: "Junio",      days: 30, id: 5},
    {month: "Julio",      days: 31, id: 6},
    {month: "Agosto",     days: 31, id: 7},
    {month: "Septiembre", days: 30, id: 8},
    {month: "Octubre",    days: 31, id: 9},
    {month: "Noviembre",  days: 30, id: 10},
    {month: "Diciembre",  days: 31, id: 11},
  ],

  years: [
    2013,
    2014,
    2015,
    2016
  ],

  createDaysArray: function() {
    var days = [];
    var count = 1;

    for(count = 1; count <= 31; count++) {
      days.push(count);
    }

    this.set('days', days);
  },

  adjustDays: function() {
    if (this.get('curDay') > this.get('months')[this.get('curMonth')].days) {
      this.set('curDay', this.get('months')[this.get('curMonth')].days);
    }
  }.observes('curMonth', 'curDay'),

  createEvent: function() {
    var eCurDay = parseInt(this.get('curDay'), 10);
    var eCurMonth = parseInt(this.get('curMonth'), 10) + 1;

    if ( eCurDay < 10 ) {
      eCurDay = '0' + eCurDay;
    }

    if ( eCurMonth < 10 ) {
      eCurMonth = '0' + eCurMonth;
    }

    var eTitle =       this.get('title');
    var eDate =        eCurDay + "/" +
                       eCurMonth + "/" +
                       this.get('curYear');
    var ePlace =       this.get('place');
    var eDescription = this.get('description');


console.log("CAPTURADO Titulo: " + eTitle +
  ", Fecha: " + eDate +
  ", Lugar: " + ePlace +
  ", Descripción: " + eDescription);
  }
});