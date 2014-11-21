module.exports = function(Review) {
  //remote hook
  Review.beforeRemote('create', function(context, user, next) {
    var req = context.req;
    req.body.date = Date.now();
    req.body.publisherId = req.accessToken.userId;
    next();
  });

  Review.beforeRemote('save', function(context, user, next) {
    console.log(context.req.body);
    next();
  });
};
