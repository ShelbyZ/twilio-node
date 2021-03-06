'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('SubscribedTrack', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks('MTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var roomSid = 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var participantSid = 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'MTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Rooms/${roomSid}/Participants/${participantSid}/SubscribedTracks/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'room_sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'participant_sid': 'PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'publisher_sid': 'PAbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'name': 'bob-track',
          'kind': 'data',
          'enabled': true,
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks/MTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks('MTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var roomSid = 'RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var participantSid = 'PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://video.twilio.com/v1/Rooms/${roomSid}/Participants/${participantSid}/SubscribedTracks`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'subscribed_tracks': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Participants/PAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SubscribedTracks?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'subscribed_tracks'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .participants('PAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .subscribedTracks.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
