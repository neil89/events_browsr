App.EditProfileView = Ember.TextField.extend
(
  {
    insertNewline: function()
    {
      this.get('controller').updateProject();
    },

    didInsertElement: function()
    {
      this.$('input:first').focus();
    }
  }
);