Ember.Handlebars.helper('beautifyAttendingUsers', function(count) {
  var str = "Asistirá";

  if (count == 1) {
    str += " " + count + " persona";
  }
  else {
    str += "n " + count + " personas";
  }

  return str;
});