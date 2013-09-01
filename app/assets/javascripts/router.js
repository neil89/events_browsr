App.Router.map( function() {
  this.resource('app', { path: '/' }, function () {
    this.route('signup', { path: '/signup' });
    this.route('signin', { path: '/signin' });
    this.route('home', { path: '/home' });
    this.resource('events', { path: '/events' }, function() {
      this.route('index', { path: '/' });
      this.route('new', { path: '/new' });
      this.route('own', { path: '/own' });
    });
    this.route('profile', { path: '/profile' });
  });
});