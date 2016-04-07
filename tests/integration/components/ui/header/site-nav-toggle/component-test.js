import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/header/site-nav-toggle', 'Integration | Component | ui/header/site nav toggle', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/header/site-nav-toggle}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/header/site-nav-toggle}}
      template block text
    {{/ui/header/site-nav-toggle}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
