App.AppProfileController = Ember.ObjectController.extend( {
  needs: ['app'],

  isEditing: false,

  editProfile: function() {
    this.set('isEditing', true);
  },

  updateUser: function() {



/*
this.set('isEditing', false);

var editProject = this.get('model');
var transaction = editProject.get('store').transaction();
transaction.add(editProject);
this.transaction = transaction;

this.transaction.commit();
this.transaction = null;
*/
  },

  deleteUser: function() {
/*    
if (window.confirm("¿Estás seguro de que quieres eliminar este proyecto?"))
{
  this.get('model').deleteRecord();
  this.get('store').commit();

  this.send('goToProjectsIndex');
}
*/
  },

  model: function() {
    return this.get('controllers.app.model');
  }.property('controllers.app.model')
});
