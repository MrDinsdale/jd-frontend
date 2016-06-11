import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import Ember from "ember";

export default Model.extend({
  slug: attr('string'),
  title: attr('string'),
  excerpt: attr('string'),
  body: attr('string'),
  created_at: attr('date'),
  updated_at: attr('date'),

  featuredImage: Ember.computed('slug', function() {
    return `https://s3-eu-west-1.amazonaws.com/joedinsdale-assets/temp-assets/${this.get('slug')}-cover.jpg`;
  })
});
