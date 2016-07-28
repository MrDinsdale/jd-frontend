import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('project', params.project_slug);
  },

  setupController: function(controller, model) {
    var project = model;

    controller.set('project', project);

    this.set('titleToken', project.get('title'));
  }
});
