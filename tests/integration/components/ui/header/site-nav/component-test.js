import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/header/site-nav', 'Integration | Component | ui/header/site nav', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/header/site-nav}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/header/site-nav}}
      template block text
    {{/ui/header/site-nav}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
