import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  featured_image: attr('string'),
  excerpt: attr('string'),
  body: attr('string'),
  project_url: attr('string'),
  created_at: attr('date'),
  updated_at: attr('date')
});
