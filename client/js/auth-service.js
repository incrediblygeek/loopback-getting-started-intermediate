angular
  .module('apps')
  .factory('Auth', function(User) {
    var user;
    return {
      logIn: function(email, password) {
        User.login({
          email: email,
          password: password
        },
        function(user) {
          console.log('user');
        },
        function(err) {
          console.log(err);
          user = null;
        }
      },
      isLoggedIn: function() {
        return user ? user : false;
      }
    };
  });
