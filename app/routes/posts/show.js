import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('post', params.post_slug);
  },

  setupController: function(controller, model) {
    let post = model;

    controller.set('post', post);

    if (post.get('related.first')) {
      controller.set('relatedFirst', this.store.findRecord('post', post.get('related.first')));
    } else {
      controller.set('relatedFirst', false);
    }

    if (post.get('related.second')) {
      controller.set('relatedSecond', this.store.findRecord('post', post.get('related.second')));
    } else {
      controller.set('relatedSecond', false);
    }

    this.set('titleToken', post.get('title'));
  }
});
