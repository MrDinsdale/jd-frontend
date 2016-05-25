import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  excerpt: attr('string')
});

// http://localhost:4000/api/v1/posts/working-with-ember