import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('posts', function() {
    this.route('show', { path: '/:post_slug'});
  });

  this.route('projects', function() {
    this.route('show', { path: '/:project_slug'});
  });
});

export default Router;
