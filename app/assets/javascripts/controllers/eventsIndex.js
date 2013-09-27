App.EventsIndexController = Ember.ArrayController.extend( {//App.AppEventsListController.extend( {
  needs: ['app'],

  itemController: 'event',

  totalPages: 1,

  pagesIndex: [],

  currentPage: 0,

  limit: 5,

  paginatedEvents: undefined,

  setupPagination: function() {
    var totalPages = Math.ceil(this.get('model.length') / this.get('limit'));

    this.set('totalPages', totalPages);

    var pages = [];

    for (var i = 0; i < totalPages; i++) {
      var label = (i+1).toString();
      pages.push({ id: i.toString(), label: label });
    }

    this.set('pagesIndex', pages);

    this.set('currentPage', 0);
  }.observes('model.length'),

  changePage: function(p) {
    this.set('currentPage', p);
  },

  updateClasses: function() {
    var currentPageId = parseInt(this.get('pagesIndex')[this.get('currentPage')].id, 10);
    var currentPageLabel = this.get('pagesIndex')[this.get('currentPage')].label;

    // Setting class 'active' to current page
    $("#pagination-boxes").children().each(function(idx) {
      if( $(this).text() == currentPageLabel ) {
        $(this).addClass('active');
      }
      else {
        if ($(this).hasClass('active') ) {
          $(this).removeClass('active');
        }
        if ($(this).hasClass('disabled') ) {
          $(this).removeClass('disabled');
        }
      }
    });

    // Disabling previous or next page button, if it is necessary
    if (currentPageId === 0) {
      $("#pagination-boxes").children().first().addClass('disabled');
    }
    if (currentPageId === (this.get('totalPages') - 1) ) {
      $("#pagination-boxes").children().last().addClass('disabled');
    }
  }.observes('currentPage'),

  paginateEvents: function() {
    var skip = this.get('currentPage') * this.get('limit');

    var curPageEvents = this.get('model').slice(skip, skip + this.get('limit'));

    this.set('paginatedEvents', curPageEvents);
  }.observes('currentPage'),

  previousPage: function() {
    var currentPage = parseInt(this.get('currentPage'), 10);

    if (currentPage > 0)
      this.set('currentPage', currentPage - 1);
  },

  nextPage: function() {
    var currentPage = parseInt(this.get('currentPage'), 10);

    if (currentPage < (this.get('totalPages') - 1) )
      this.set('currentPage', currentPage + 1);
  },

/*
  sortFunction: function(x, y) {
    if (x == y)
      return 0;

    var dateX = x.substring(6) + x.substring(3, 5) + x.substring(0, 2);
    var dateY = y.substring(6) + y.substring(3, 5) + y.substring(0, 2);

    return dateX < dateY ? -1 : 1;
  },
*/
  sortProperties: ['date'],
  sortAscending: true,

  setCurrentEvent: function(e) {
    this.set('currentEvent', e);
    $("#more-info-event").modal("show");
  },

  getTodayEvents: function() {
    var events = this.get('model');
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setSeconds(0);
    today.setMilliseconds(0);
    var flag = false;
    var todayEvents = [];
    var self = this;

    events.toArray().forEach(function(ev) {
      var date = ev.get('date');
      var evDate = new Date(date.substring(6),
                            parseInt(date.substring(3, 5), 10) - 1,
                            date.substring(0, 2));

      var days = Math.round((today - evDate) / 1000 / 60 / 60 / 24);

      if (days === 0) {
        todayEvents.push(ev);
      }
      else {
        var arr = self.get('comingEvents');
        arr.push(ev);
        self.set('comingEvents', arr);
      }

    });

    return todayEvents;
  }.property('model'),

  comingEvents: [],

  currentEvent: undefined
});
