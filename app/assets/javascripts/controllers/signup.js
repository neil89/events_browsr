App.AppSignupController = Ember.ObjectController.extend( {
  name: null,
  surname: null,
  email: null,
  gender: null,
  age: null,
  password: null,
  passwordConfirmation: null,
  isSelected: null,

  createUser: function() {
    var uName =                 this.get('name');
    var uSurname =              this.get('surname');
    var uEmail =                this.get('email');
    var uGender =               this.get('isSelected');
    var uAge =                  this.get('age');
    var uPassword =             this.get('password');
    var uPasswordConfirmation = this.get('passwordConfirmation');

    console.log("CAPTURADO Nombre: " + uName + 
      ", Apellidos: " + uSurname + 
      ", Email: " + uEmail + 
      ", Sexo: " + uGender +
      ", Edad: " + uAge + 
      ", Contraseña: " + uPassword +
      ", Confirm. Contraseña: " + uPasswordConfirmation);


    this.transaction = this.get('store').transaction();

    var newUser = this.transaction.createRecord
    (
      App.User,
      {
        name: uName,
        surname: uSurname,
        email: uEmail,
        gender: uGender,
        age: uAge,
        password: uPassword,
        password_confirmation: uPasswordConfirmation
      }
    );

    this.set('model', newUser);

    this.transaction.commit();
    this.transaction = null;
  },

  createProject: function()
  {
    var pTitle =        this.get('projectTitle');
    var pStartingDate = this.get('startingDate');
    var pEndingDate =   this.get('endingDate');
    var pDescription =  this.get('description');

    var personId = this.get('controllers.app.personId');
    //var person = App.Person.find(personId);

var person = App.Person.find(2);
var pj = App.Project.find(18);

    this.transaction = this.get('store').transaction();

var newProjectMember = this.transaction.createRecord
(
App.ProjectTeam,
{
  coworker: person,
  project:  pj
}
);
this.set('model', newProjectMember);

/*
    var newProject = this.transaction.createRecord
    (
      App.Project,
      {
        title: pTitle,
        startingDate: pStartingDate,
        endingDate: pEndingDate,
        description: pDescription,
        creator: person
      }
    );
*/

    //this.set('model', newProject);


/*
    var coworkersArray = [];
    coworkersArray.push(App.Person.find(2));
    this.get('model.coworkers').pushObject(coworkersArray);
*/

    this.transaction.commit();
    this.transaction = null;

    this.send('goToProjectsIndex');

    console.log("GUARDADO Titulo: " + pTitle + ", fecha inicio: " + pStartingDate + ", fecha fin: " + pEndingDate + ", description: " + pDescription);
  }
});