# appear.in JavaScript SDK

The Bower package for official appear.in JavaScript SDK, available for browsers.

Release notes can be found at https://developer.appear.in/#sdk-changelog

[![Build Status](https://secure.travis-ci.org/appearin/appearin-sdk.png)](http://travis-ci.org/appearin/appearin-sdk)

[![NPM](https://nodei.co/npm/appearin-sdk.png?stars&downloads&downloadRank)](https://nodei.co/npm/appearin-sdk/) [![NPM](https://nodei.co/npm-dl/appearin-sdk.png?months=6&height=3)](https://nodei.co/npm/appearin-sdk/)

## Installing

Install the SDK by doing:

`bower install appearin-sdk`

Alternatively, you can fetch link to the sources directly at the bottom of you body:

`<script src="//developer.appear.in/scripts/appearin-sdk.0.0.4.min.js"></script>`

You can read more on the appear.in API at our [developer pages](https://developer.appear.in).

[Documentation can be found at our developer pages too](https://developer.appear.in/#javascript-sdk-documentation).

## Using
This Bower package depends on jquery and [thunks](https://github.com/thunks/thunks).

By doing `bower install` juqery and thunks will be automatically installed, and you should add them to your HTML:

```html
<head>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="bower_components/thunks/thunks.js"></script>
  <script src="src/appearin.js"></script>
</head>
```

Alternatively, you can use [RequireJS](https://github.com/jrburke/requirejs) to load them.

## API

This SDK DOES NOT provide Promise API for `appearin.getRandomRoomName` method, that being said,
you can not use `.then` after calling this method, instead, you should use thunk style callback.

#### appearin.getRandomRoomName
```javascript
  appearin.getRandomRoomName()(function(error, roomName){
    // do something with the roomName
  })
```

Besides this, all the other methods are the same with apprear.in official SDK.

## Who's using

+ Teambition: https://www.teambition.com
