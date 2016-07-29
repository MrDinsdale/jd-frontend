import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('project', params.project_slug);
  },

  setupController: function(controller, model) {
    var project = model;

    controller.set('project', project);

    this.set('titleToken', project.get('title'));

    let description = project.get('excerpt');

    let pageMeta = [{
      type: 'meta',
      tagId: 'meta-description-tag',
      attrs: {
        name: 'description',
        content: description
      }
    },
    {
      type: 'meta',
      tagId: 'twitter-description-tag',
      attrs: {
        name: 'twitter:description',
        content: description
      }
    },
    {
      type: 'meta',
      tagId: 'og-description-tag',
      attrs: {
        name: 'og:description',
        content: description
      }
    },
    {
      type: 'meta',
      tagId: 'schema-description-tag',
      attrs: {
        itemprop: 'description',
        content: description
      }
    }];

    this.set('headTags', pageMeta);
  }
});
