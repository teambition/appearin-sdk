// Karma configuration
// Generated on Mon Jan 26 2015 11:29:40 GMT+0100 (CET)
//
var customLaunchers = {
    'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '39'
    },
    // Opera not included as it runs Chromium and is not supported in SauceLabs
    'SL_Firefox': {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '35'
    },
    'SL_Safari_8': {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'OS X 10.10',
        version: '8'
    },
    'SL_IE_11': {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
    }
};

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['browserify', 'mocha'],


    // list of files / patterns to load in the browser
    files: [
      'test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'test.js': ['browserify']
    },

    browserify: {
        debug: true
    },

    sauceLabs: {
        testName: "SDK testing"
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    customLaunchers: customLaunchers,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
