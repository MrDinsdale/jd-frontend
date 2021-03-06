import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Posts',

  model: function() {
    return this.store.findAll('post');
  },

  setupController: function(controller, model) {
    var posts = model;

    controller.set('posts', posts);
  }
});
