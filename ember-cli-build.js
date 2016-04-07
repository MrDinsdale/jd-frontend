/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import('./bower_components/FitText.js/jquery.fittext.js');
  app.import('./bower_components/gsap/src/uncompressed/jquery.gsap.js');
  app.import('./bower_components/gsap/src/uncompressed/TweenMax.js');
  app.import('./bower_components/gsap/src/uncompressed/TimelineLite.js');
  app.import('./bower_components/gsap/src/uncompressed/plugins/CSSPlugin.js');

  return app.toTree();
};
