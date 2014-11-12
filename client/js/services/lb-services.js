(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Reviewer
 * @header lbServices.Reviewer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Reviewer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Reviewer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Reviewers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Reviewer.reviews.findById() instead.
        "prototype$__findById__reviews": {
          url: urlBase + "/Reviewers/:id/reviews/:fk",
          method: "GET",
        },

        // INTERNAL. Use Reviewer.reviews.destroyById() instead.
        "prototype$__destroyById__reviews": {
          url: urlBase + "/Reviewers/:id/reviews/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Reviewer.reviews.updateById() instead.
        "prototype$__updateById__reviews": {
          url: urlBase + "/Reviewers/:id/reviews/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Reviewer.reviews() instead.
        "prototype$__get__reviews": {
          url: urlBase + "/Reviewers/:id/reviews",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Reviewer.reviews.create() instead.
        "prototype$__create__reviews": {
          url: urlBase + "/Reviewers/:id/reviews",
          method: "POST",
        },

        // INTERNAL. Use Reviewer.reviews.destroyAll() instead.
        "prototype$__delete__reviews": {
          url: urlBase + "/Reviewers/:id/reviews",
          method: "DELETE",
        },

        // INTERNAL. Use Reviewer.reviews.count() instead.
        "prototype$__count__reviews": {
          url: urlBase + "/Reviewers/:id/reviews/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#create
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Reviewers",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#upsert
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Reviewers",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#exists
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Reviewers/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#findById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Reviewers/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#find
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Reviewers",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#findOne
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Reviewers/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#updateAll
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Reviewers/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#deleteById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Reviewers/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#count
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Reviewers/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#prototype$updateAttributes
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Reviewers/:id",
          method: "PUT",
        },

        // INTERNAL. Use CoffeeShop.reviewers.findById() instead.
        "::findById::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/:fk",
          method: "GET",
        },

        // INTERNAL. Use CoffeeShop.reviewers.destroyById() instead.
        "::destroyById::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviewers.updateById() instead.
        "::updateById::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/:fk",
          method: "PUT",
        },

        // INTERNAL. Use CoffeeShop.reviewers() instead.
        "::get::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use CoffeeShop.reviewers.create() instead.
        "::create::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers",
          method: "POST",
        },

        // INTERNAL. Use CoffeeShop.reviewers.destroyAll() instead.
        "::delete::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviewers.count() instead.
        "::count::CoffeeShop::reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/count",
          method: "GET",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Reviewer#updateOrCreate
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#update
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#destroyById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Reviewer#removeById
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Reviewer#modelName
    * @propertyOf lbServices.Reviewer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Reviewer`.
    */
    R.modelName = "Reviewer";

    /**
     * @ngdoc object
     * @name lbServices.Reviewer.reviews
     * @header lbServices.Reviewer.reviews
     * @object
     * @description
     *
     * The object `Reviewer.reviews` groups methods
     * manipulating `Review` instances related to `Reviewer`.
     *
     * Call {@link lbServices.Reviewer#reviews Reviewer.reviews()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Reviewer#reviews
         * @methodOf lbServices.Reviewer
         *
         * @description
         *
         * Queries reviews of Reviewer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::get::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#count
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Counts reviews of Reviewer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reviews.count = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::count::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#create
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.create = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::create::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#destroyAll
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Deletes all reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyAll = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::delete::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#destroyById
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Delete a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.reviews.destroyById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::destroyById::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#findById
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Find a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.findById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::findById::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Reviewer.reviews#updateById
         * @methodOf lbServices.Reviewer.reviews
         *
         * @description
         *
         * Update a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.updateById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::updateById::Reviewer::reviews"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.CoffeeShop
 * @header lbServices.CoffeeShop
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `CoffeeShop` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "CoffeeShop",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/CoffeeShops/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use CoffeeShop.reviewers.findById() instead.
        "prototype$__findById__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/:fk",
          method: "GET",
        },

        // INTERNAL. Use CoffeeShop.reviewers.destroyById() instead.
        "prototype$__destroyById__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviewers.updateById() instead.
        "prototype$__updateById__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/:fk",
          method: "PUT",
        },

        // INTERNAL. Use CoffeeShop.reviews.findById() instead.
        "prototype$__findById__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/:fk",
          method: "GET",
        },

        // INTERNAL. Use CoffeeShop.reviews.destroyById() instead.
        "prototype$__destroyById__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviews.updateById() instead.
        "prototype$__updateById__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/:fk",
          method: "PUT",
        },

        // INTERNAL. Use CoffeeShop.reviewers() instead.
        "prototype$__get__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use CoffeeShop.reviewers.create() instead.
        "prototype$__create__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers",
          method: "POST",
        },

        // INTERNAL. Use CoffeeShop.reviewers.destroyAll() instead.
        "prototype$__delete__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviewers.count() instead.
        "prototype$__count__reviewers": {
          url: urlBase + "/CoffeeShops/:id/reviewers/count",
          method: "GET",
        },

        // INTERNAL. Use CoffeeShop.reviews() instead.
        "prototype$__get__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use CoffeeShop.reviews.create() instead.
        "prototype$__create__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews",
          method: "POST",
        },

        // INTERNAL. Use CoffeeShop.reviews.destroyAll() instead.
        "prototype$__delete__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviews.count() instead.
        "prototype$__count__reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#create
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/CoffeeShops",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#upsert
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/CoffeeShops",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#exists
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/CoffeeShops/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#findById
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/CoffeeShops/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#find
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/CoffeeShops",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#findOne
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/CoffeeShops/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#updateAll
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/CoffeeShops/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#deleteById
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/CoffeeShops/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#count
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/CoffeeShops/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#prototype$updateAttributes
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/CoffeeShops/:id",
          method: "PUT",
        },

        // INTERNAL. Use Review.coffeeShop() instead.
        "::get::Review::coffeeShop": {
          url: urlBase + "/Reviews/:id/coffeeShop",
          method: "GET",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#updateOrCreate
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#update
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#destroyById
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#removeById
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.CoffeeShop#modelName
    * @propertyOf lbServices.CoffeeShop
    * @description
    * The name of the model represented by this $resource,
    * i.e. `CoffeeShop`.
    */
    R.modelName = "CoffeeShop";

    /**
     * @ngdoc object
     * @name lbServices.CoffeeShop.reviewers
     * @header lbServices.CoffeeShop.reviewers
     * @object
     * @description
     *
     * The object `CoffeeShop.reviewers` groups methods
     * manipulating `Reviewer` instances related to `CoffeeShop`.
     *
     * Call {@link lbServices.CoffeeShop#reviewers CoffeeShop.reviewers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#reviewers
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Queries reviewers of CoffeeShop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::get::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviewers#count
         * @methodOf lbServices.CoffeeShop.reviewers
         *
         * @description
         *
         * Counts reviewers of CoffeeShop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reviewers.count = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::count::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviewers#create
         * @methodOf lbServices.CoffeeShop.reviewers
         *
         * @description
         *
         * Creates a new instance in reviewers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.create = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::create::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviewers#destroyAll
         * @methodOf lbServices.CoffeeShop.reviewers
         *
         * @description
         *
         * Deletes all reviewers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviewers.destroyAll = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::delete::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviewers#destroyById
         * @methodOf lbServices.CoffeeShop.reviewers
         *
         * @description
         *
         * Delete a related item by id for reviewers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviewers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.reviewers.destroyById = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::destroyById::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviewers#findById
         * @methodOf lbServices.CoffeeShop.reviewers
         *
         * @description
         *
         * Find a related item by id for reviewers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviewers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.findById = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::findById::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviewers#updateById
         * @methodOf lbServices.CoffeeShop.reviewers
         *
         * @description
         *
         * Update a related item by id for reviewers
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviewers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Reviewer` object.)
         * </em>
         */
        R.reviewers.updateById = function() {
          var TargetResource = $injector.get("Reviewer");
          var action = TargetResource["::updateById::CoffeeShop::reviewers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.CoffeeShop.reviews
     * @header lbServices.CoffeeShop.reviews
     * @object
     * @description
     *
     * The object `CoffeeShop.reviews` groups methods
     * manipulating `Review` instances related to `CoffeeShop`.
     *
     * Call {@link lbServices.CoffeeShop#reviews CoffeeShop.reviews()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop#reviews
         * @methodOf lbServices.CoffeeShop
         *
         * @description
         *
         * Queries reviews of CoffeeShop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::get::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviews#count
         * @methodOf lbServices.CoffeeShop.reviews
         *
         * @description
         *
         * Counts reviews of CoffeeShop.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.reviews.count = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::count::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviews#create
         * @methodOf lbServices.CoffeeShop.reviews
         *
         * @description
         *
         * Creates a new instance in reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.create = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::create::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviews#destroyAll
         * @methodOf lbServices.CoffeeShop.reviews
         *
         * @description
         *
         * Deletes all reviews of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.reviews.destroyAll = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::delete::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviews#destroyById
         * @methodOf lbServices.CoffeeShop.reviews
         *
         * @description
         *
         * Delete a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` - 
         */
        R.reviews.destroyById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::destroyById::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviews#findById
         * @methodOf lbServices.CoffeeShop.reviews
         *
         * @description
         *
         * Find a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.findById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::findById::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.CoffeeShop.reviews#updateById
         * @methodOf lbServices.CoffeeShop.reviews
         *
         * @description
         *
         * Update a related item by id for reviews
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for reviews
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R.reviews.updateById = function() {
          var TargetResource = $injector.get("Review");
          var action = TargetResource["::updateById::CoffeeShop::reviews"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Review
 * @header lbServices.Review
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Review` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Review",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Reviews/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Review.coffeeShop() instead.
        "prototype$__get__coffeeShop": {
          url: urlBase + "/Reviews/:id/coffeeShop",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#create
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Reviews",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#upsert
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Reviews",
          method: "PUT",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#exists
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Reviews/:id/exists",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#findById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Reviews/:id",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#find
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "find": {
          url: urlBase + "/Reviews",
          method: "GET",
          isArray: true,
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#findOne
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Reviews/findOne",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#updateAll
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Reviews/update",
          method: "POST",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#deleteById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Reviews/:id",
          method: "DELETE",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#count
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Reviews/count",
          method: "GET",
        },

        /**
         * @ngdoc method
         * @name lbServices.Review#prototype$updateAttributes
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Reviews/:id",
          method: "PUT",
        },

        // INTERNAL. Use Reviewer.reviews.findById() instead.
        "::findById::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews/:fk",
          method: "GET",
        },

        // INTERNAL. Use Reviewer.reviews.destroyById() instead.
        "::destroyById::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use Reviewer.reviews.updateById() instead.
        "::updateById::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews/:fk",
          method: "PUT",
        },

        // INTERNAL. Use Reviewer.reviews() instead.
        "::get::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use Reviewer.reviews.create() instead.
        "::create::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews",
          method: "POST",
        },

        // INTERNAL. Use Reviewer.reviews.destroyAll() instead.
        "::delete::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews",
          method: "DELETE",
        },

        // INTERNAL. Use Reviewer.reviews.count() instead.
        "::count::Reviewer::reviews": {
          url: urlBase + "/Reviewers/:id/reviews/count",
          method: "GET",
        },

        // INTERNAL. Use CoffeeShop.reviews.findById() instead.
        "::findById::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/:fk",
          method: "GET",
        },

        // INTERNAL. Use CoffeeShop.reviews.destroyById() instead.
        "::destroyById::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/:fk",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviews.updateById() instead.
        "::updateById::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/:fk",
          method: "PUT",
        },

        // INTERNAL. Use CoffeeShop.reviews() instead.
        "::get::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews",
          method: "GET",
          isArray: true,
        },

        // INTERNAL. Use CoffeeShop.reviews.create() instead.
        "::create::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews",
          method: "POST",
        },

        // INTERNAL. Use CoffeeShop.reviews.destroyAll() instead.
        "::delete::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews",
          method: "DELETE",
        },

        // INTERNAL. Use CoffeeShop.reviews.count() instead.
        "::count::CoffeeShop::reviews": {
          url: urlBase + "/CoffeeShops/:id/reviews/count",
          method: "GET",
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Review#updateOrCreate
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Review` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Review#update
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Update instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Review#destroyById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Review#removeById
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Review#modelName
    * @propertyOf lbServices.Review
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Review`.
    */
    R.modelName = "Review";


        /**
         * @ngdoc method
         * @name lbServices.Review#coffeeShop
         * @methodOf lbServices.Review
         *
         * @description
         *
         * Fetches belongsTo relation coffeeShop
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `CoffeeShop` object.)
         * </em>
         */
        R.coffeeShop = function() {
          var TargetResource = $injector.get("CoffeeShop");
          var action = TargetResource["::get::Review::coffeeShop"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = '$LoopBack$' + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = '$LoopBack$' + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
