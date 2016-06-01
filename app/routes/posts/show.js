import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('post', params.post_slug);
  },

  setupController: function(controller, model) {
    var post = model;

    controller.set('post', post);

    this.set('titleToken', post.get('title'));
  }
});
