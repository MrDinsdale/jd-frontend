import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('brand/logo-small-light', 'Integration | Component | brand/logo small light', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{brand/logo-small-light}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#brand/logo-small-light}}
      template block text
    {{/brand/logo-small-light}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
