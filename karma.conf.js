//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app/assets/javascripts',

    files: [
      'angular.js',
      'angular-route.js',
      'angular-mocks.js',      
      'angular-resource.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
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
