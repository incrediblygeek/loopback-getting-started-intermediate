angular
  .module('app')
  .factory('AuthService', ['Reviewer', '$q', function(User, $q) {
    var tokenId;
    var currentUser;

    // function getCurrentUser() {
    //   return currentUser;
    // }

    // function isLoggedIn() {
    //   return !!tokenId; //true if there is a token, false otherwise
    // }

    function login(email, password) {
      console.log(arguments);
      User.login({
        email: email,
        password: password
      }, function(token) {
        console.log(arguments);
        //tokenId = token.id;
        //currentUser = token.user;
        //def.resolve(token);
      }, function(err) {
        console.log(arguments);
        //def.reject(err);
      });
      // var def = $q.defer();
      // User.login({
      //   email: email,
      //   password: password
      // }, function(token) {
      //   tokenId = token.id;
      //   currentUser = token.user;
      //   def.resolve(token);
      // }, function(err) {
      //   def.reject(err);
      // });
      // return def.promise;
    }

    // function logOut {
    //   User.logout();
    //   tokenId = null;
    //   currentUser = null;
    // }

    return {
      login: login,
      // isLoggedIn: isLoggedIn,
      // logOut: logOut
      // getCurrentUser: getCurrentUser
    };
  }]);
