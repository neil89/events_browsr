Ember.Handlebars.helper('daysLeft', function(date) {
  var today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);
  today.setMilliseconds(0);
  var eventDate = new Date(date.substring(6),
                           parseInt(date.substring(3, 5), 10) - 1,
                           date.substring(0, 2));
  var days = 0;

  if (today != eventDate) {
    var subtract = eventDate - today;

    days = Math.round(subtract / 1000 / 60 / 60/ 24);
  }

  var str;

  if (days === 0) {
    str = "hoy";
  }
  else {
    str = "falta";
    if (days > 1) {
      str += "n";
    }

    str += " " + days + " día";

    if (days > 1)
      str += "s";
  }

  return str;
});