/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['bower_components', 'node_modules']
    },
    minifyJS: {
      enabled: EmberApp.env() === 'production'
    },
    minifyCSS: {
      enabled: EmberApp.env() === 'production'
    },
    sourcemaps: {
      enabled: EmberApp.env() !== 'production'
    }
  });

  app.import('./bower_components/gsap/src/uncompressed/TweenLite.js');
  app.import('./bower_components/gsap/src/uncompressed/TimelineLite.js');
  app.import('./bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js');

  return app.toTree();
};
