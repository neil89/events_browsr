App.AppSignupRoute = Ember.Route.extend( {
  events: {
  //   becameError: function() {
  //   console.log("*becameError* en router");
  // },

  // becameInvalid: function(errors) {
  //   console.log("*becameInvalid* en router");
  // },
    error: function(reason, transition) {
        // Assuming we got here due to the error in `beforeModel`,
        // we can expect that error === "bad things!",
        // but a promise model rejecting would also 
        // call this hook, as would any errors encountered
        // in `afterModel`. 

        // The `error` hook is also provided the failed
        // `transition`, which can be stored and later
        // `.retry()`d if desired.

        if (reason.status === 422) {
        this.transitionTo('app');
        }
        else {
          return true; // bubble the error
        }
    }
  }
});