import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/site-hero-static', 'Integration | Component | ui/site hero static', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  this.render(hbs`{{ui/site-hero-static}}`);

  assert.equal(this.$('.jd-block__title').text(), 'Joe Dinsdale');
  assert.equal(this.$('.jd-block__subtitle').text(), 'Frontend developer & Designer');
});
