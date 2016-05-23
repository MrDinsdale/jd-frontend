import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/header/site-header', 'Integration | Component | ui/header/site header', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  this.render(hbs`{{ui/header/site-header}}`);

  this.set('navState', 0);
  assert.equal(this.$('.site-header').hasClass('nav-closed'), true, 'Nav is closed when navState is 0');
});
