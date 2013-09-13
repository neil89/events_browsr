App.AppProfileController = Ember.ObjectController.extend( {
  needs: ['app'],

  isEditing: false,

  id: null,
  
  //prevModel

  data: null,

  editProfile: function() {
    this.set('isEditing', true);

    var profile = this.get('model');
    this.set('id', profile.get('id'));

    var transaction = profile.get('store').transaction();
    transaction.add(profile);
    this.transaction = transaction;
  },

  cancelEdition: function() {
    this.set('isEditing', false);

console.log("Errores en surname: *" + this.get('model.surnameError') + "*");

    var transaction = this.transaction;
    if (transaction) {
      transaction.rollback();
      this.transaction = undefined;
    }
  },

  updateUser: function() {
    this.set('model.password_confirmation', this.get('model.password'));
/*
    var self = this;
    var updateUser = this.get('model');

    updateUser.one('didError', function() {
      Ember.run.next(function() {
        //self.send('signedUpRedirect');
        alert("Modelo con error!");
        console.log("modelo con error!!");
      });
    });
*/
    this.transaction.commit();
    this.transaction = undefined;
    this.cancelEdition();
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
    return this.get('model');
  }.property('model')
  
});
