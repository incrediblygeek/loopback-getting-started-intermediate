angular
  .module('app')
  .factory('Auth', function(User) {
    var user;

    function logIn() {
      User.login({
        email: user.email,
        password: user.password
      },
      function(user) {
        console.log('user');
      },
      function(err) {
        console.log(err);
        logOut();
      });
    }

    function logOut() {
      user = null;
    }

    function isLoggedIn() {
      return (user);
    }

    return {
      logIn: logIn,
      logOut: logOut,
      isLoggedIn: isLoggedIn
    };
  });
