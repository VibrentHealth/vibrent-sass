/**
 * Created by jamienola on 9/15/17.
 */
// Karma configuration

/* Updates to Karma Coverage per: https://github.com/karma-runner/karma-coverage/issues/157 */

var istanbul = require('browserify-istanbul');

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['browserify','mocha','chai'],

        // list of files / patterns to load in the browser
        files: [

            /* Need to specifically include this to get the module to load in tests */
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'app/scripts/main.js',
            'app/scripts/main/**/*.spec.js',

            /* LOAD HTML */
            'app/scripts/main/**/*.html'
        ],

        // list of files to exclude


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        // Browserify is needed to transform the require statements that are native in nodejs
        preprocessors: {
            'app/scripts/main/**/*.spec.js': ['browserify'],
            'app/scripts/main/**/*.html': ['ng-html2js']
        },

        // Special Configuration to integrate the browserify transforms into the transformer that
        // Istambul uses, this is an issue with the node module: https://github.com/karma-runner/karma-coverage/issues/157
        browserify: {
            debug: true,
            transform: [
                istanbul({ instrumenter: require('isparta') })
            ]
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['dots','coverage'],

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity
    })
};
