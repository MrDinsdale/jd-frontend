import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ui/site-header-static', 'Integration | Component | ui/site header static', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ui/site-header-static}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ui/site-header-static}}
      template block text
    {{/ui/site-header-static}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
