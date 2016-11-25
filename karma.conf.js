//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: '.',

    files: [
      'app/assets/javascripts/angular.js',
      'app/assets/javascripts/angular-route.js',
      'app/assets/javascripts/angular-mocks.js',      
      'app/assets/javascripts/angular-resource.js',
      'app/assets/javascripts/*.js',
      'specjs/*.spec.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ]

  });
};
