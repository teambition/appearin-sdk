;(function(root, factory) {
  'use strict';

  if (typeof exports !== 'undefined' ) module.exports = factory(require('jquery'), require('thunks'));
  else if(typeof define === 'function' && define.amd) define(['jquery', 'thunks'], factory);
  else root.AppearIn = factory(root.jQuery, root.thunks);

}(typeof window === 'object' ? window : this, function($, thunks){
  'use strict';

  var API_URL  = "https://api.appear.in";
  var BASE_URL = "https://appear.in";

  var thunk = thunks();

  var request = function(options) {
    return thunk(function(done) {
      $.ajax(options)
        .done(function(data, status, xhr){
          if (xhr.status !== 200) done(data);
          else done(null, data, status, xhr);
        })
        .fail(function(xhr, status, error){
          error = new Error(error);
          error.status = status;
          error.xhr = xhr;
          done(error);
        });
    });
  };

  function normalizeRoomName(rawName) {
    if (rawName && rawName[0] !== '/') {
      rawName =  '/' + rawName;
    }
    return ('' + rawName).trim().toLowerCase().replace(/\/*$/, '');
  }

  function checkSupportForIce(server) {
    var stunServer = server || "stun:stun.l.google.com:19302";
    var config = {"iceServers": [{"url": stunServer}]};
    try {
      var RTCPeerConnection = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
      var pc = new RTCPeerConnection(config);
      return pc && !!pc.iceConnectionState; // pc.iceState is deprecated, no longer supported
    } catch (e) {
      return false;
    }
  }

  function addRoomToElement(element, roomName) {
    roomName = normalizeRoomName(roomName);
    element.src = BASE_URL + roomName;
  }

  function AppearIn(config) {
    config = config || {};
    if (config.debug) {
      // Do not send network requests when testing
      request = function() {
        return thunk(function(done) {
          done(null, { roomName: '/sly-koala' });
        });
      };
    }
  }

  AppearIn.prototype.isWebRtcCompatible = function isWebRtcCompatible() {
    try {
      var supportsVideoElement = !!document.createElement('video').canPlayType;
      var supportsVP8 = document.createElement('video').canPlayType('video/webm; codecs="vp8", vorbis') === "probably";
      var supportsGetUserMedia = !!(navigator.mozGetUserMedia
        || navigator.webkitGetUserMedia
        || navigator.msGetUserMedia
        || navigator.getUserMedia);
      var supportsRTCPeerConnection = !!(window.RTCPeerConnection
        || window.mozRTCPeerConnection
        || window.webkitRTCPeerConnection);
      var supportsIceCandidates = checkSupportForIce(this.stunServer);

      return supportsVideoElement
        && supportsVP8
        && supportsGetUserMedia
        && supportsRTCPeerConnection
        && supportsIceCandidates;
    } catch (e) {
      return false;
    }
  };

  AppearIn.prototype.getRandomRoomName = function getRandomRoomName() {
    return request({
      type: "POST",
      url: API_URL + "/random-room-name",
      headers: {
        accept: "application/json, text/plain, */*"
      }
    })(function (error, res) {
      if (error) throw error;
      return res.roomName;
    });
  };

  AppearIn.prototype.addRoomToIframe = function addRoomToIframe(iframe, roomName) {
    if (!iframe || !roomName) {
      throw new Error("Missing parameters");
    }

    addRoomToElement(iframe, roomName);
  };

  AppearIn.prototype.addRoomToElementById = function addRoomToElementById(id, roomName) {
    if (!id || !roomName) {
      throw new Error("Missing parameters");
    }

    var iframe = document.getElementById(id);
    if (!iframe) {
      return;
    }

    addRoomToElement(iframe, roomName);
  };

  return AppearIn;
}));
