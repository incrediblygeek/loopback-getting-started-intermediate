angular
  .module('app')
  .factory('Auth', ['Reviewer', '$q', function(User, $q) {
    var tokenId;
    var user;
    return {
      isLoggedIn: function() {
        return !!tokenId; //true if there is a token, false otherwise
      },
      logIn: function(email, password) {
        var def = $q.defer();
        User.login({
          email: email,
          password: password
        }, function(token){
          tokenId = token.id;
          user = token.user;
          def.resolve(token);
        }, function(err) {
          def.reject(err);
        });
        return def.promise;
      },
      logOut: function() {
        User.logout();
        tokenId = null;
        user = null;
      },
      currentUser: function(){
        return user;
      }
    };
  }]);
