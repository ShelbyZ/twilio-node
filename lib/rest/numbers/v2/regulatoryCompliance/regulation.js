'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var RegulationList;
var RegulationPage;
var RegulationInstance;
var RegulationContext;

/* jshint ignore:start */
/**
 * Initialize the RegulationList
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList
 *
 * @param {Twilio.Numbers.V2} version - Version of the resource
 */
/* jshint ignore:end */
RegulationList = function RegulationList(version) {
  /* jshint ignore:start */
  /**
   * @function regulations
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationContext}
   */
  /* jshint ignore:end */
  function RegulationListInstance(sid) {
    return RegulationListInstance.get(sid);
  }

  RegulationListInstance._version = version;
  // Path Solution
  RegulationListInstance._solution = {};
  RegulationListInstance._uri = `/RegulatoryCompliance/Regulations`;
  /* jshint ignore:start */
  /**
   * Streams RegulationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function each
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList#
   *
   * @param {object} [opts] - Options for request
   * @param {regulation.end_user_type} [opts.endUserType] -
   *          The type of End User of the Regulation resource
   * @param {string} [opts.isoCountry] -
   *          The ISO country code of the phone number's country
   * @param {string} [opts.numberType] - The type of phone number being regulated
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  RegulationListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists RegulationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList#
   *
   * @param {object} [opts] - Options for request
   * @param {regulation.end_user_type} [opts.endUserType] -
   *          The type of End User of the Regulation resource
   * @param {string} [opts.isoCountry] -
   *          The ISO country code of the phone number's country
   * @param {string} [opts.numberType] - The type of phone number being regulated
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RegulationListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of RegulationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList#
   *
   * @param {object} [opts] - Options for request
   * @param {regulation.end_user_type} [opts.endUserType] -
   *          The type of End User of the Regulation resource
   * @param {string} [opts.isoCountry] -
   *          The ISO country code of the phone number's country
   * @param {string} [opts.numberType] - The type of phone number being regulated
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RegulationListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'EndUserType': _.get(opts, 'endUserType'),
      'IsoCountry': _.get(opts, 'isoCountry'),
      'NumberType': _.get(opts, 'numberType'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new RegulationPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single target page of RegulationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  RegulationListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new RegulationPage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a regulation
   *
   * @function get
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList#
   *
   * @param {string} sid - The unique string that identifies the Regulation resource
   *
   * @returns {Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationContext}
   */
  /* jshint ignore:end */
  RegulationListInstance.get = function get(sid) {
    return new RegulationContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  RegulationListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  RegulationListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return RegulationListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the RegulationPage
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationPage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {RegulationSolution} solution - Path solution
 *
 * @returns RegulationPage
 */
/* jshint ignore:end */
RegulationPage = function RegulationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(RegulationPage.prototype, Page.prototype);
RegulationPage.prototype.constructor = RegulationPage;

/* jshint ignore:start */
/**
 * Build an instance of RegulationInstance
 *
 * @function getInstance
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationPage#
 *
 * @param {RegulationPayload} payload - Payload response from the API
 *
 * @returns RegulationInstance
 */
/* jshint ignore:end */
RegulationPage.prototype.getInstance = function getInstance(payload) {
  return new RegulationInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
RegulationPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

RegulationPage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the RegulationContext
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationInstance
 *
 * @property {string} sid -
 *          The unique string that identifies the Regulation resource
 * @property {string} friendlyName -
 *          A human-readable description of the Regulation resource
 * @property {string} isoCountry -
 *          The ISO country code of the phone number's country
 * @property {string} numberType -
 *          The type of phone number restricted by the regulatory requirement
 * @property {regulation.end_user_type} endUserType -
 *          The type of End User of the Regulation resource
 * @property {object} requirements -
 *          The sid of a regulation object that dictates requirements
 * @property {string} url - The absolute URL of the Regulation resource
 *
 * @param {V2} version - Version of the resource
 * @param {RegulationPayload} payload - The instance payload
 * @param {sid} sid - The unique string that identifies the Regulation resource
 */
/* jshint ignore:end */
RegulationInstance = function RegulationInstance(version, payload, sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.numberType = payload.number_type; // jshint ignore:line
  this.endUserType = payload.end_user_type; // jshint ignore:line
  this.requirements = payload.requirements; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(RegulationInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new RegulationContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a RegulationInstance
 *
 * @function fetch
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RegulationInstance
 */
/* jshint ignore:end */
RegulationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
RegulationInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

RegulationInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the RegulationContext
 *
 * @constructor Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationContext
 *
 * @param {V2} version - Version of the resource
 * @param {sid} sid - The unique string that identifies the Regulation resource
 */
/* jshint ignore:end */
RegulationContext = function RegulationContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/RegulatoryCompliance/Regulations/${sid}`;
};

/* jshint ignore:start */
/**
 * fetch a RegulationInstance
 *
 * @function fetch
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed RegulationInstance
 */
/* jshint ignore:end */
RegulationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new RegulationInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Numbers.V2.RegulatoryComplianceContext.RegulationContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
RegulationContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

RegulationContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  RegulationList: RegulationList,
  RegulationPage: RegulationPage,
  RegulationInstance: RegulationInstance,
  RegulationContext: RegulationContext
};