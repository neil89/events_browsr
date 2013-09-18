Ember.RadioButton = Ember.View.extend( {
  tagName : "input",
  type : "radio",
  attributeBindings : [ "name", "type", "value", "checked:checked:", "required" ],

  required: null,

  click : function() {
    this.set("selection", this.$().val());
  },

  checked : function() {
    return this.get("value") == this.get("selection");
  }.property("selection")
});