Ember.Handlebars.helper('beautifyGender', function(gender) {
  var g = '';

  if (gender == "male")
    g = "Masculino";
  else
    g = "Femenino";

  return g;
});