import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('project', params.project_slug);
  },

  setupController: function(controller, model) {
    var project = model;

    controller.set('project', project);

    this.set('titleToken', project.get('title'));

    let description = project.get('title') + " project overview - " + project.get('excerpt');
    let image = "https://s3-eu-west-1.amazonaws.com/" + project.get('assetPath') + "/images/thumb/" + project.get('featured_image');

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
    },
    {
      type: 'meta',
      tagId: 'meta-image-tag',
      attrs: {
        name: 'image',
        content: image
      }
    },
    {
      type: 'meta',
      tagId: 'twitter-image-tag',
      attrs: {
        name: 'twitter:image',
        content: image
      }
    },
    {
      type: 'meta',
      tagId: 'og-image-tag',
      attrs: {
        name: 'og:image',
        content: image
      }
    }];

    this.set('headTags', pageMeta);
  }
});
