App.Router.map( function() {
  this.resource('app', { path: '/' }, function () {
    this.route('signup', { path: '/signup' });
    this.route('signin', { path: '/signin' });
    this.route('board', { path: '/board' });
  });
});