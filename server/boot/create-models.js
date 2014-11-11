var async = require('async');

module.exports = function(app) {
  //data sources
  var mongoDs = app.dataSources.mongoDs;
  var mysqlDs = app.dataSources.mysqlDs;

  //create all models
  async.parallel({
    reviewers: async.apply(createReviewers),
    coffeeShops: async.apply(createCoffeeShops),
  }, function(err, results) {
    if (err) throw err;
    createReviews(results.reviewers, results.coffeeShops, function(err) {
      console.log('Models created sucessfully');
    });
  });

  //create reviewers
  function createReviewers(cb) {
    mysqlDs.automigrate('Reviewer', function(err) {
      if (err) return cb(err);
      var Reviewer = app.models.Reviewer;
      Reviewer.create([
        {email: 'foo@bar.com', password: 'foobar'},
        {email: 'john@doe.com', password: 'johndoe'},
        {email: 'jane@doe.com', password: 'janedoe'}
      ], cb);
    });
  }

  //create coffee shops
  function createCoffeeShops(cb) {
    mongoDs.automigrate('CoffeeShop', function(err) {
      if (err) return cb(err);
      var CoffeeShop = app.models.CoffeeShop;
      CoffeeShop.create([
        {name: 'Bel Cafe', city: 'Vancouver'},
        {name: 'Three Bees Coffee House', city: 'San Mateo'},
        {name: 'Caffe Artigiano', city: 'Vancouver'},
      ], cb);
    });
  }

  //create reviews
  function createReviews(reviewers, coffeeShops, cb) {
    mongoDs.automigrate('Review', function(err) {
      if (err) return cb(err);
      var Review = app.models.Review;
      Review.create([
        {
          date: Date.now(),
          rating: 5,
          content: 'A very good coffee shop.',
          publisherId: reviewers[0].id,
          coffeeShopId: coffeeShops[0].id,
        },
        {
          date: Date.now(),
          rating: 5,
          content: 'Quite pleasant.',
          publisherId: reviewers[1].id,
          coffeeShopId: coffeeShops[0].id,
        },
        {
          date: Date.now(),
          rating: 4,
          content: 'It was ok.',
          publisherId: reviewers[1].id,
          coffeeShopId: coffeeShops[1].id,
        },
        {
          date: Date.now(),
          rating: 4,
          content: 'I go here everyday',
          publisherId: reviewers[2].id,
          coffeeShopId: reviewers[2].id,
        }
      ], cb);
    });
  }
};
