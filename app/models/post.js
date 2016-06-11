import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  slug: attr('string'),
  title: attr('string'),
  excerpt: attr('string'),
  body: attr('string'),
  created_at: attr('date'),
  updated_at: attr('date')
});
