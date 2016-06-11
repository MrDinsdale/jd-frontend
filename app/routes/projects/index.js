import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Projects',

  model: function() {
    return this.store.findAll('project');
  },

  setupController: function(controller, model) {
    var projects = model;

    controller.set('projects', projects);
  }
});
